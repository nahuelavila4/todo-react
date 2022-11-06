import React from "react";
import "../stylesheet/Tareas.css";
import { AiFillCloseCircle } from "react-icons/ai";

export function Tareas({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
}) {
  return (
    <div className={completada ? "contad completada" : "contad"}>
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contad-icono" onClick={() => eliminarTarea(id)}>
        <AiFillCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

/* 
Todo lo que esta dentro componente cuenta como prop
 */

/* 
Para que la tarea se vea distinta dependiendo si ya fue
completada o no hay que usar nombre de clase condicional

Se le asigna un operador ternario al div de la tarea. La condicion
determina nombre de la clase dependiendo si 2do prop es true o false 
 */
