import React from "react";
import "../stylesheet/ContenedorTareas.css"
import { Tareas } from "./Tareas";

export function ContenedorTareas({tarea}) {
  return (
    <div className="tarea-contenedor">
      <div className="ind-tarea">
      <div className="agregar">
        <input placeholder="Ingrese su tarea"></input>
        <button>Archivar</button>
      </div>
      <Tareas />
      </div>
    </div>
  );
}
