import React, { useState } from "react";
import "../stylesheet/Formulario.css";

function TareaFormulario(props) {

    //manejarCambio modifica el value texto de tareaNueva
    //con lo que el usuario haya escrito hasta el momento
    const manejarCambio = (e) => {};
  
  const manejarEnvio = (e) => {
    const tareaNueva = {
      id: "32",
      // texto:
    };
  };

  return (
    <form className="tarea-form">
      <input
        className="tarea-descripcion"
        placeholder="Ingrese su tarea"
        name="texto"
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
