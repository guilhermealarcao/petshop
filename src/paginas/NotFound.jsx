import React from "react";
import Imagem from '../assets/img/doguito404.svg';
import '../assets/css/404.css';


const NotFound = () => {
    return (
        <main className="cotainer flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={Imagem} alt="ilustração doguito"/>
            <p className="naoencontrado-texto">Ops, Essa página não existe!</p>
        </main>
    )
}

export default NotFound;