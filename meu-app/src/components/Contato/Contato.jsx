import React from "react";

import "./Contato.css"

function Contato () {
    return (
        <>
            <form onSubmit="event.preventDefault()">

                <fieldset>
                    <label for="input-nome">Nome</label>
                    <input type="text" name="input-nome" id="input-nome" required minLength="2"></input>
                </fieldset>

                <fieldset>
                    <label for="input-email">E-mail</label>
                    <input type="email" name="input-email" id="input-email" required></input>
                </fieldset>
                
                <fieldset>
                    <label for="input-tel">Telefone</label>
                    <input type="tel" name="input-tel" id="input-tel" placeholder="(99) 99999-9999" required pattern="^\(\d{2}\) \d{5}-\d{4}$" maxLength="15"></input>
                </fieldset>

                <fieldset>
                    <label for="input-msg">Mensagem</label>
                    <textarea name="input-msg" id="input-msg" cols="30" rows="10"></textarea>
                </fieldset>

                <center>
                    <input type="submit" value="ENVIAR" class="button" onclick="enviarFormulario()" />
                </center>

            </form>
        </>
    )
}

export default Contato