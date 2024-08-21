import React from "react";

import "./App.css";

import Header from "./components/Hearder";
import Footer from "./components/footer";

import Curriculo from "./components/Curriculo";
import Portifolio from "./components/Portifolio";
import Contato from "./components/Contato"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
 

  return (
    <>
      <Header></Header>
    
      <BrowserRouter>

      <nav>
        <ul>
          <li className="button"><Link to="/">Currículo</Link></li>
          <li className="button"><Link to="/portifolio">Portfólio</Link></li>
          <li className="button"><Link to="contato">Contato</Link></li>
        </ul>
      </nav>
      
      <Routes>
          <Route index element={<Curriculo />} />
          <Route path="portifolio" element={<Portifolio />} />
          <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>


      <Curriculo></Curriculo>
      <Portifolio></Portifolio>
      <Footer></Footer>



    </>


  )
}

export default App
