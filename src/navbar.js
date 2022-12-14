export function Navbar(props){
    return<div className="Contenedor_Barra_de_Navegacion">
    <nav className="Navbar">
      <li>{props.title1}</li>
      <li>{props.title2}</li> 
      <li>{props.title3}</li>
    </nav></div>
};