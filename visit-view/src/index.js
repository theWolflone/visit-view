import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Login} from "./components/login";
import { Menu } from "./components/menu";
import {Places} from "./components/addPlaces";
import {Landing} from "./components/landing";
import App from  "./App"
import { Tabla } from "./components/tabla";
import reportWebVitals from "./reportWebVitals";


// Hacemos el render de nuestra aplicación para de este modo mostrar los componentes específicos.
ReactDOM.render(
  <React.StrictMode>
    {/* <Tabla/> */}
    <Menu/>
    {/* <Places/> */}
    {/* <Login/> */}
    {/* <Landing/> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
