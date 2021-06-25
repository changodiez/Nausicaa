import React, { useContext } from "react";
import { DataContext } from "./../Context/Context";

const FoodBox = ({ lang, nombre, precio }) => {
  const { foundPlace, flattened } = useContext(DataContext);

  // esto es una cabeceada para que solo cambie la typo en brunch
  let fontStyle;
  if (
    nombre === "KYOTO" ||
    nombre === "OSAKA" ||
    nombre === "KōBE" ||
    nombre === "FUJI" ||
    nombre === "KōBE" ||
    nombre === "NARA" ||
    nombre ===  "OKINAWA" ||
    nombre ===  "NAGASAKI" ||
    nombre ===  "KANAZAWA"

  ) {
    fontStyle = "IvyMode";
  } else {
    fontStyle = "orpheuspro, serif";
  }

  const switchLang = (parameter) => {
    let product = flattened.find((el) => el.nombre === nombre);
    let parameterEs = `${parameter}_es`;
    let parameterEn = `${parameter}_en`;
    switch (lang) {
      case "ca":
        return product[parameter];
      case "en":
        return product[parameterEn];
      case "es":
        return product[parameterEs];
      default:
        return product[parameter];
    }
  };

  return (
    <div className="food-box">
      <div className="left-box">
        <h4 style={{ color: foundPlace.color, fontFamily: fontStyle }}>
          {switchLang("nombre")}
        </h4>
        <p>{switchLang("descripcion")}</p>
      </div>
      <h4 className="h4-precio">{precio}</h4>
    </div>
  );
};

export default FoodBox;
