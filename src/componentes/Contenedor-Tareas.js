import React, { useState } from "react";
import "../stylesheet/ContenedorTareas.css";
import TareaFormulario from "./Formulario";
import { Tareas } from "./Tareas";

export function ContenedorTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTareas = tarea => {
    console.log("Tarea agregada")
    console.log(tarea)
  }

  return (
    <div className="tarea-contenedor">
      <TareaFormulario />
      <div className="tareas-conjunto">
        {tareas.map((tarea) => (
          <Tareas texto={tarea.texto} completada={tarea.completada} />
        ))}
      </div>
    </div>
  );
}

/* 
Map recorre las tareas y las pasa como argumento a una funcion.
En este caso creamos un componente para cada una de esas tareas

El array tareas almacena todo lo que retorna el componente Tareas
 */
