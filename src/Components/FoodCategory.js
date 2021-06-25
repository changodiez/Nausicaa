import React, { useContext } from "react";
import { DataContext } from "./../Context/Context";
import linea from "../Assets/línea Nausicaa.svg";

const FoodCategory = ({ lang, nombre, nombre_en, nombre_es }) => {
  const { foundPlace } = useContext(DataContext);
  const nameFood = () => {
    switch (lang) {
      case "ca":
        return nombre;
      case "en":
        return nombre_en;
      case "es":
        return nombre_es;
      default:
        return nombre;
    }
  };
  return (
    <div className="box-container">
      <div
        className="box"
        style={{
          height: `calc(75vh/${foundPlace.categorias.length})`,
          alignItems: "center",
          display: "flex",
        }}
      >
        <h1
          className="headerCategory"
          style={{
            fontSize: `calc(50vh/${foundPlace.categorias.length}/2.5)`,
            margin: "auto",
            color: foundPlace.color,
            fontFamily: "IvyMode",
          }}
        >
          {nameFood()}
        </h1>
      </div>
      <img className="linea-diamantes" src={linea} alt="linea"></img>
    </div>
  );
};

export default FoodCategory;
