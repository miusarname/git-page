import React from "react";
import ReactDOM from "react-dom/client";
import { Formulario,NavBar,Hero,Present,Habilidades,HabilidadesPreset } from "./Elementos_pagina";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
    <NavBar linkOfImage="#" linkImage="#" title1="Inicio" title2="Sobre Mi" barIndex="Más Información..." subtitle1="Proyectos" subtitle2="Habilidades" subtitle3="Vision" subtitle4="Redes Sociales"/>
    <Hero titleH="Pagina de un par de programadores" subtitleH="Esta pagina fue creada por un par de programadores que desean obtner experiencia en el trabajo en equipos..."/>
    <Present header="Que tal? Soy Oscar Alvarez G" text="Soy un programador Autodidacta aunque suele tambien estudiar con academias de programacion como freeCodeCamp además de que deseo ir a la Universidad a estudiar Ingenieria de Sistemas e Informatica" />
    {/* Pongo "HabilidadesPreset" pues esta Habilidades pero para no poner tanto codigo y que quede imposible de leer preferi ponerlo en los elementos y traer solo un elemento con todo ya puesto */}
    <HabilidadesPreset/>
    
  </>
);
