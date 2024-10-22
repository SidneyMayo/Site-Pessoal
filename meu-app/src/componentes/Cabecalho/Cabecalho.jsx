import React from "react";

import perfil from "./../../assets/perfil.jpeg"

import "./Cabecalho.css"
// import sidneyAvatar from "../assets/sidney-avatar.png"

function Cabecalho() {
    return (
     <header>
      <img src={perfil.jpeg} alt="foto de rosto de Sidney" />
      <h1 id="nome-perfil">Sidney Mayo</h1>
      <h3 id="eventoSubtitulo">Desenvolvedor de Software</h3>
    </header>
    )
}
export default Cabecalho;