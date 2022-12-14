/* export class nombre de clase {
  render(){
    return codigo HTML
  }
} */
import PropTypes from "prop-types";
import { Component } from "react";

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

Navbar.defaultProps={
  clase :"esta es una clase",
  link : "#"
}

export function Hero(props){
  return <section id="Hero">
    <h1>{props.title}</h1><br></br>
    <p>{props.text}</p>
  </section>
}




