import React, { useState } from "react";
import "../stylesheet/ContenedorTareas.css";
import TareaFormulario from "./Formulario";
import { Tareas } from "./Tareas";

export function ContenedorTareas() {
  // Lista de tareas de el estado
  const [tareas, setTareas] = useState([]);

  // El arg tarea recibe datos de
  // prop.onSubmit(tareaNueva)
  const agregarTareas = (tarea) => {
    // Para verif que no este en blanco
    // trim saca esp del principio y final de string
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      console.log(tarea)
    }
  };

  // filter agrega todos los elementos que cumplen la condicion
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas)
  }

  return (
    <div className="tarea-contenedor">
      {/* Envia funcion a comp donde se hace la tarea */}
      <div className="zxc">
        <TareaFormulario onSubmit={agregarTareas} />
        <div className="tareas-conjunto">
          {tareas.map((tarea) => (
            <Tareas
              key={tarea.id}
              id={tarea.id}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
              texto={tarea.texto}
              completada={tarea.completada}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Para mostrar lista en React y este
// respete el orden hay que darle prop key,
// sirve para identificar elemento en la lista

/* 
Map recorre las tareas y las pasa como argumento a una funcion.
En este caso creamos un componente para cada una de esas tareas

El array tareas almacena todo lo que retorna el componente Tareas
 */
