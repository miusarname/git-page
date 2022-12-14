import PropTypes from "prop-types";

/* barra de navegacion de la pagina  web */
export function Navbar(props) {
  return (
    <div className="Contenedor_Barra_de_Navegacion">
      <nav className="Navbar">
        <li className={props.clase}>
          <a>{props.title1}</a>
        </li>
        <li className={props.clase}>
          <a>{props.title2}</a>
        </li>
        <li className={props.clase}>
          <a>{props.title3}</a>
        </li>
      </nav>
    </div>
  );
}

Navbar.defaultProps={
  clase :"esta es una clase"
}


