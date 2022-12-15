import PropTypes from "prop-types";
import { Component } from "react";

/* Logo en la parte superior del document */
export function ListItem(props) {
  return (
    <div>
      <a>
        <img src={props.linkImage}></img>
      </a>
    </div>
  );
}

/* barra de navegacion de la pagina  web */
export function Navbar(props) {
  return (
    <div className="Contenedor_Barra_de_Navegacion">
      <nav className="Navbar">
        <li className={props.clase}>
          <a href={props.link}>{props.title1}</a>
        </li>
        <li className={props.clase}>
          <a href={props.link}>{props.title2}</a>
        </li>
        <li className={props.clase}>
          <a href={props.link}>{props.title3}</a>
        </li>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  clase: "esta es una clase",
  link: "#",
};

/* Primera seccion de la pagina o el llamado "hero" */
export function Hero(props) {
  return (
    <section id="Hero">
      <h1>{props.title}</h1>
      <br></br>
      <p>{props.text}</p>
    </section>
  );
}

export function Formulario(props){
  return <form onSubmit={(e)=>{e.preventDefault();alert("enviado")}}> {/* por arreglar */}
    <h2>Nombre:</h2>
    <input type="text"></input>
    <h2>Edad</h2>
    <input type="number"></input>
    <h2>dirección:</h2>
    <input type="text"></input>
    <h2>Motivo por el que deseas aprender...</h2>
    {/* <input type="checkbox">{props.razon1}</input>  */}  {/* por arreglar */}
  </form>
}
