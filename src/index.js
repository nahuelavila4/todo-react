import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Main } from "./Main";
import { ContenedorTareas } from "./componentes/Contenedor-Tareas";
import { Tareas } from "./componentes/Tareas";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="cont">
    <div className="tr">
      <Main />
      <ContenedorTareas />
    </div>
  </div>
);

/* 
Los componentes son funciones que siempre retornan
una interfaz
 */
