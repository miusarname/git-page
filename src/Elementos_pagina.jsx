import PropTypes from "prop-types";
import { Component } from "react";
import {AiOutlineCode} from "react-icons/ai"
import {FaLaptopCode,FaVrCardboard} from "react-icons/fa"

export function NavBar(props){
  return<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href={props.linkOfImage} width="112" height="28" >
      <a class="button is-light">
            OSCAR M ALVAREZ G
          </a>
      {/* <img src={props.linkImage} href="" width="112" height="28"/> */}
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        {props.title1}
      </a>

      <a class="navbar-item">
      {props.title2}
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
        {props.barIndex}
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
          {props.subtitle1}
          </a>
          <a class="navbar-item">
          {props.subtitle2}
          </a>
          <a class="navbar-item">
          {props.subtitle3}
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
          {props.subtitle4}
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
}

export function Hero(props){
  return <div>
    <section class="hero is-success is-fullheight ">
  <div class="hero-body">
    <div class="">
      <p class="title">
        {props.titleH}
      </p>
      <p class="subtitle">
        {props.subtitleH}
      </p>
    </div>
  </div>
</section>
  </div>
}

export function Present(props){
  return <div class="notification is-white p-6 m-6">
  <article class="message is-primary is-large">
  <div class="message-header">
    {props.header}
  </div>
  <div class="message-body">
    {props.text}
  </div>
</article>
</div>
}

export function Habilidades(){
  return<div class="box m-6">
    <h1 className="has-text-centered"><strong className="is-size-3">De manera general</strong></h1>
  <div className="columns is-centered pt-6">
    <div className="column">
    <span>
      <li className="has-text-centered">
    <AiOutlineCode className="is-size-3 has-content-centered "/>
    </li>
    </span>
    </div>
    <div className="column">
    <span>
      <li className="has-text-centered">
    <FaLaptopCode className="is-size-3 has-content-centered"/>
    </li>
    </span>
    </div>
    <div className="column">
    <span>
      <li className="has-text-centered">
    <FaVrCardboard className="is-size-3 has-content-centered"/>
    </li>
    </span>
    </div>
  </div>
</div>
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

