import React from "react";

import "./App.css";

import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

import Curriculo from "./componentes/Curriculo/Curriculo";
import Portifolio from "./componentes/Portifolio/Portifolio";
import Contato from "./componentes/Contato/Contato"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao";

function App() {
 

  return (
    <>
      <Cabecalho></Cabecalho>
    
      <BrowserRouter>

      <BarraNavegacao></BarraNavegacao>
    
      <Routes>
          <Route index element={<Curriculo/>} />
          <Route path="portifolio" element={<Portifolio/>} />
          <Route path="contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>


      <Curriculo></Curriculo>
      <Portifolio></Portifolio>
      <Rodape></Rodape>



    </>


  )
}

export default App
