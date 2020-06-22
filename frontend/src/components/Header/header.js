import React from 'react';
import {
    BrowserRouter as   
    Link
  } from "react-router-dom";
import logo from '../../assets/img/LogoAtualizada.PNG';
import '../../assets/css/reset.css';
import '../../assets/css/header.css';




function Header() {
    return (
        <div>
            <header>
                <div className="menu-header-home container-fluid">
                    <div className="logo-header">
                        <a href="#"><img src={logo} alt="bfriend" /></a>
                    </div>
                    <Link to="/cadastro">
                        <nav className="btn-header-home">
                            <button className="btn-cadastro-header" >Cadastre-se</button>
                            <button className="btn-entrar-header">Entrar</button>
                        </nav>
                    </Link>
                </div>
            </header>
        </div>
    );
}



export default Header