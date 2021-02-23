import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";



export default class App extends Component {
  render() {
    
      const Places = lazy(() => import("./Clients/places"));

      return (
        <Router>
          <Route exact path="/">
            {/* esto lo hice solo porque va a ser un solo menu. Nuevo nombre del place "menu" */}
            <Redirect to="/menu"/> 
          </Route>
          <Suspense fallback={null}>
            <Places />
          </Suspense>
        </Router>
      );
    
  }
}

