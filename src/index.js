import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar,Hero,app } from "./Elemento_pagina";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
  {/* Creo la barra de navegacion pasando lo que contendra los <a> y los <li> */}
    <Navbar title1="Inicio" title2="Nuestro projectos" title3="Sobre" clase="items" />
    {/* Se le debe pasar lo que contendra el h1 con (title) y un texto extra con (text) */}
    <Hero title="Pagina de desarrollador" text="un proyecto de cooperacion entre dos futuros ingenieros"/>
    
  </>
);
