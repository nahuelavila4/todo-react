import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../stylesheet/Formulario.css";

function TareaFormulario(props) {
  //manejarCambio cambia el value texto de tareaNueva
  //con lo que el usuario haya escrito hasta el momento
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
    // Permite extraer valor del input
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Enviando");

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva)
    // Envia datos del obj
  };

  return (
    <form className="tarea-form" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tarea-descripcion"
        placeholder="Ingrese su tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar</button>
    </form>
  );
}

export default TareaFormulario;

/* 
manejarEvento es para decirle al formulario
que debe hacerse al enviar los datos

Recibe como argumento un evento (los argumentos son los valores de un parametro)
que se va a mandar automaticamente cuando ocurra el envio
 */
