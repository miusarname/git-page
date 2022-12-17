import PropTypes from "prop-types";
import { Component } from "react";
import { AiOutlineCode, AiOutlineGithub } from "react-icons/ai";
import { FaLaptopCode, FaVrCardboard } from "react-icons/fa";

export function NavBar(props) {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href={props.linkOfImage} width="112" height="28">
          <a class="button is-light">PAR DE PROGRAMADORES...</a>
          {/* <img src={props.linkImage} href="" width="112" height="28"/> */}
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">{props.title1}</a>

          <a class="navbar-item">{props.title2}</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">{props.barIndex}</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">{props.subtitle1}</a>
              <a class="navbar-item">{props.subtitle2}</a>
              <a class="navbar-item">{props.subtitle3}</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">{props.subtitle4}</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Hero(props) {
  return (
    <div>
      <section class="hero is-success is-fullheight ">
        <div class="hero-body">
          <div class="">
            <p class="title">{props.titleH}</p>
            <p class="subtitle">{props.subtitleH}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Present(props) {
  return (
    <div class="notification is-white p-6 m-6">
      <article class="message is-primary is-large">
        <div class="message-header">{props.header}</div>
        <div class="message-body">{props.text}</div>
      </article>
      <article class="message is-primary is-large">
        <div class="message-header">{props.header1}</div>
        <div class="message-body">{props.text1}</div>
      </article>
    </div>
  );
}

export function Habilidades(props) {
  return (
    <div class="box m-6">
      <h1 className="has-text-centered">
        <strong className="is-size-3">{props.principaltitle}</strong>
      </h1>
      <div className="columns is-centered pt-6">
        <div className="column">
          <span>
            <li className="has-text-centered">
              <AiOutlineCode className="is-size-3 has-content-centered " />
            </li>
          </span>
          <h1 className="subtitle has-text-centered">{props.title1}</h1>
          <p className="has-text-centered pt-5"> {props.contentb1}</p>
          <p className="has-text-centered pt-5 mj"> {props.contentb12}</p>
          <p className="has-text-centered pt-5"> {props.contentb13}</p>
          <p className="has-text-centered pt-6 mj"> {props.contentb14}</p>
          <ul>
            <li className="has-text-centered">{props.li1}</li>
            <li className="has-text-centered">{props.li12}</li>
            <li className="has-text-centered">{props.li13}</li>
            <li className="has-text-centered">{props.li14}</li>
            <li className="has-text-centered">{props.li15}</li>
            <li className="has-text-centered">{props.li16}</li>
          </ul>
        </div>
        <div className="column">
          <span>
            <li className="has-text-centered">
              <FaLaptopCode className="is-size-3 has-content-centered" />
            </li>
          </span>
          <h1 className="subtitle has-text-centered">{props.title2}</h1>
          <p className="has-text-centered pt-5"> {props.contentb2}</p>
          <p className="has-text-centered pt-5 mj"> {props.contentb22}</p>
          <p className="has-text-centered pt-5"> {props.contentb23}</p>
          <p className="has-text-centered pt-5 mj"> {props.contentb24}</p>
          <ul>
            <li className="has-text-centered">{props.li2}</li>
            <li className="has-text-centered">{props.li22} </li>
            <li className="has-text-centered">{props.li23}</li>
            <li className="has-text-centered">{props.li24}</li>
            <li className="has-text-centered">{props.li25}</li>
            <li className="has-text-centered">{props.li26}</li>
          </ul>
        </div>
        <div className="column">
          <span>
            <li className="has-text-centered">
              <FaVrCardboard className="is-size-3 has-content-centered" />
            </li>
          </span>
          <h1 className="subtitle is-spaced has-text-centered">
            {props.title3}
          </h1>
          <p className="has-text-centered pt-5"> {props.contentb3}</p>
          <p className="has-text-centered pt-5 mj"> {props.contentb32}</p>
          <p className="has-text-centered pt-5"> {props.contentb33}</p>
          <p className="has-text-centered pt-6 mj"> {props.contentb34}</p>
          <ul>
            <li className="has-text-centered">{props.li3}</li>
            <li className="has-text-centered">{props.li32}</li>
            <li className="has-text-centered">{props.li33}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function HabilidadesPreset() {
  return (
    <Habilidades
      principaltitle="De manera general"
      title1="Habilidades Generales"
      title2="Proyectos (de manera general)"
      title3="Vision (Generalidades)"
      contentb1="Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador."
      contentb12='"Lenguajes de Programacion"'
      contentb13="HTML, CSS, Sass, Git,JQuery,JS,React,Redux.js,etc..."
      contentb2="Realmente me preocupo por las personas y me encanta ayudar a otros programadores a trabajar en su oficio."
      contentb22="Enfoque a la hora de hacer proyectos"
      contentb23="suelo tener un rumbo claro que desarrollo en el codigo; no voy con rodeos ni complicaciones absurdas antes bien trato de se concreto y certero..."
      contentb3='Suele por lo general pensar que " Las soluciones van en vici y nosotros corriendo" por tanto el empeño es importante'
      contentb32="Preferencia a la hora de hacer proyectos"
      contentb33="Me gusta a la hora de trabajar tener objetivos y fines claros"
      contentb14="Dev Tools:"
      contentb34="Al inciar un proyecto:"
      contentb24="Proyectos:"
      li1="Vs Code"
      li12="React"
      li13="HTML"
      li14="GitHub"
      li15="Bootstrap"
      li16="Entre Otros..."
      li2="Calculadora Js"
      li22="Bateria React"
      li23="Pagina web (HTML & CSS)"
      li3="Growth Thinking"
      li32="self-learning thinking"
      li33="leadership thought"
      li24="Blog"
      li25="Pagina web tecnica"
      li26="Entre otros..."
    />
  );
}

export function Portafolio(props) {
  return (
    <div className="m-6">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box p-0">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={props.link1} alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box p-0">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={props.link2} alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box p-0">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={props.link3} alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box p-0">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={props.link4} alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box p-0">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={props.link5} alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box p-0">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={props.link6} alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="columns px-1">
        <div class="column">
          <a
            class="button is-primary is-outlined is-rounded is-medium has-text-weight-normal "
            href={props.link7}
          >
            <span class="icon is-centered">
              <AiOutlineGithub />
            </span>
            <span>{props.span}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function PortafolioPreset(){
  return <Portafolio link1="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/319828334_729576178533205_4968416949360646760_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=tQmY8bJWx5EAX9Df553&_nc_ht=scontent.fbga1-4.fna&oh=00_AfCbBhb0-N7NRj3UFfoNRtv6MkhsS4zxG6wZdtNiVyeqYw&oe=63A18137" link2="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/320364217_678097567340416_4791780670924649808_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=PadgK23euTAAX8IFwEI&_nc_ht=scontent.fbga1-4.fna&oh=00_AfCRgybbO3q28cGGKTky9xeShyUh1sOXb4uQnZMObY_uTw&oe=63A20E8E" link3="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/320423201_555000179806744_4734389583843083309_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=vylFEZotZV0AX-bBtf2&_nc_ht=scontent.fbga1-4.fna&oh=00_AfDHJ4H77pLLQFFjIrplc0jTJsNGJXpqvKu671NXSOADCA&oe=63A32BBE" link4="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/319673157_3275970512731718_3412372531647299148_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=luUk2c911hYAX9vlEh1&_nc_ht=scontent.fbga1-4.fna&oh=00_AfA4H58w2zti1n0SUgsKFi-t2IC26To_L28M3THWn0zekQ&oe=63A13723" link5="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/319904646_1618672918550536_6669037749264749605_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=KIT4cxhk8uwAX-xDwys&tn=A3pb98NHb7asuIee&_nc_ht=scontent.fbga1-4.fna&oh=00_AfAfH8CGYiFdQao0q2N7GugE3ZAUc02jpIJ7AO0v3UzIIg&oe=63A317CA" link6="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/320536625_902921237786360_9152048882270853184_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=RNIRGkA9M5AAX_bDsQJ&_nc_ht=scontent.fbga1-4.fna&oh=00_AfAdoODWri1yPwO-JOqyDCjseVWrNF6pjPDH818U3A0P8A&oe=63A224CD" link7="https://github.com/miusarname" span="Ver más en GitHub"  />
}

export function Formulario(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("enviado");
      }}
    >
      {" "}
      {/* por arreglar */}
      <h2>Nombre:</h2>
      <input type="text"></input>
      <h2>Edad</h2>
      <input type="number"></input>
      <h2>dirección:</h2>
      <input type="text"></input>
      <h2>Motivo por el que deseas aprender...</h2>
      {/* <input type="checkbox">{props.razon1}</input>  */}{" "}
      {/* por arreglar */}
    </form>
  );
}
