import React from "react";

import "./../../assets/perfil.jpeg";

import "./Portifolio.css";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";
import portfolio from "./Portifolio.json";

function Portifolio() {   
    
    return(
        
        <main>

            {portfolio.map( 
                (item, index) =>
                <ItemPortfolio
                key={index}
                link={item.link}
                image={item.image + (index + 1)}
                title={item.title + (index + 1)}
                ></ItemPortfolio>
            )}
        </main>
   )
}

export default Portifolio