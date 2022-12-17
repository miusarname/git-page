import React from "react";
import ReactDOM from "react-dom/client";
import {
  Formulario,
  NavBar,
  Hero,
  Present,
  Habilidades,
  HabilidadesPreset,
  Portafolio,
} from "./Elementos_pagina";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
    <NavBar
      linkOfImage="#"
      linkImage="#"
      title1="Inicio"
      title2="Sobre Mi"
      barIndex="Más Información..."
      subtitle1="Proyectos"
      subtitle2="Habilidades"
      subtitle3="Vision"
      subtitle4="Redes Sociales"
    />
    <Hero
      titleH="Pagina de un par de programadores"
      subtitleH="Esta pagina fue creada por un par de programadores que desean obtener experiencia en el trabajo en equipos..."
    />
    <Present
      header="Que tal? Soy Oscar Alvarez G"
      text="Soy un programador Autodidacta aunque suele tambien estudiar con academias de programacion como freeCodeCamp además de que deseo ir a la Universidad a estudiar Ingenieria de Sistemas e Informatica tambien cabe aclarar y resaltar de mi que soy una persona muy perfeccionista pues me gusta hacerlas cosas con empeño y dedicacion"
      header1="Que tal? Soy Juan Pablo"
      text1=""
    />
    {/* Pongo "HabilidadesPreset" pues esta Habilidades pero para no poner tanto codigo y que quede imposible de leer preferi ponerlo en los elementos y traer solo un elemento con todo ya puesto */}
    <HabilidadesPreset />
    <Portafolio link1="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/319828334_729576178533205_4968416949360646760_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=tQmY8bJWx5EAX9Df553&_nc_ht=scontent.fbga1-4.fna&oh=00_AfCbBhb0-N7NRj3UFfoNRtv6MkhsS4zxG6wZdtNiVyeqYw&oe=63A18137" link2="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/320364217_678097567340416_4791780670924649808_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=PadgK23euTAAX8IFwEI&_nc_ht=scontent.fbga1-4.fna&oh=00_AfCRgybbO3q28cGGKTky9xeShyUh1sOXb4uQnZMObY_uTw&oe=63A20E8E" link3="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/320423201_555000179806744_4734389583843083309_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=vylFEZotZV0AX-bBtf2&_nc_ht=scontent.fbga1-4.fna&oh=00_AfDHJ4H77pLLQFFjIrplc0jTJsNGJXpqvKu671NXSOADCA&oe=63A32BBE" link4="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/319673157_3275970512731718_3412372531647299148_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=luUk2c911hYAX9vlEh1&_nc_ht=scontent.fbga1-4.fna&oh=00_AfA4H58w2zti1n0SUgsKFi-t2IC26To_L28M3THWn0zekQ&oe=63A13723" link5="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/319904646_1618672918550536_6669037749264749605_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=KIT4cxhk8uwAX-xDwys&tn=A3pb98NHb7asuIee&_nc_ht=scontent.fbga1-4.fna&oh=00_AfAfH8CGYiFdQao0q2N7GugE3ZAUc02jpIJ7AO0v3UzIIg&oe=63A317CA" link6="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/320536625_902921237786360_9152048882270853184_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=RNIRGkA9M5AAX_bDsQJ&_nc_ht=scontent.fbga1-4.fna&oh=00_AfAdoODWri1yPwO-JOqyDCjseVWrNF6pjPDH818U3A0P8A&oe=63A224CD" />
  </>
);
