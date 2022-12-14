import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Elemento_pagina";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
    <Navbar title1="Inicio" title2="Nuestro projectos" title3="Sobre" clase="items" />
  </>
);
