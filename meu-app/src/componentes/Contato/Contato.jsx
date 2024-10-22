import React, { useState } from "react";

import "./Contato.css"



function Contato () {

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [tel, setTel] = React.useState("");
    const [msg, setMsg] = React.useState("");

    function enviarFormulario(event) {
        event.preventDefault();
        console.log("Formulario enviado!")
        
        const texto = `Nome ${nome}\nE-mail: ${email}\nTelefone: ${tel}\nMensagem: ${msg}`;

        const numeroWhatsapp = import.meta.env.VITE_NUMERO_WHATSAPP; // numero do whgatsapp para o qual a mensagem sera enviada

        const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsapp, "_blank");
    }
        function mascaraTelefone(event){
            const texto= event.target.value;

            const textoApenasNumeros = texto.replace(/\D/g,'').substring(0,11);

            let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

            if(textoApenasNumeros.length < 11){
                telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

        } setTel(telefoneFormatado);
    }

    return (
        <>
            <form onSubmit={enviarFormulario}>

                <fieldset>
                    <label htmlFor="input-nome">Nome</label>
                    
                    < input 
                    type="text" 
                    name="input-nome" 
                    id="input-nome" 
                    required minLength="2"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    />
                
                </fieldset>

                <fieldset>
                    
                    <label htmlFor="input-email">E-mail</label>
                    
                    <input 
                    type="email" 
                    name="input-email" 
                    id="input-email" 
                    required 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />

                </fieldset>
                
                <fieldset>
                    <label htmlFor="input-tel">Telefone</label>
                    
                    <input 
                    type="tel" 
                    name="input-tel" 
                    id="input-tel" 
                    placeholder="(99) 99999-9999" 
                    required pattern="^\(\d{2}\) \d{5}-\d{4}$" 
                    maxLength="15"
                    value={tel}
                    onChange={(event) => setTel(event.target.value)}
                    />
                    
                </fieldset>

                <fieldset>
                    <label htmlFor="input-msg">Mensagem</label>
                    
                    <textarea 
                    name="input-msg" 
                    id="input-msg" 
                    cols="30" 
                    rows="10"
                    value={msg}
                    onChange={(event) => setMsg(event.target.value)}
                    />

                </fieldset>

                <center>
                    <input type="submit" value="ENVIAR" class="button" />
                </center>

            </form>
        </>
    )
}

export default Contato