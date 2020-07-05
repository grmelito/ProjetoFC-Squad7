import React from 'react';
import {
    BrowserRouter as
        Link,
        Switch,
        Route
} from "react-router-dom";
import logo from '../../assets/img/LogoAtualizada.PNG';
import '../../assets/css/reset.css';
import '../../assets/css/header.css';




function Header() {
    return (
        <div>
            <header>
                <div className="menu-header-home container-fluid">
                    <div >
                        <a  href="#"><img className="logo-header" img src={logo} alt="bfriend" /></a>
                    </div>

                    <nav className="btn-header-home">
                        <a href="/cadastro">
                            <button className="btn-cadastro-header" >Cadastre-se</button>
                            </a>
                        <a href="/login">
                        <button className="btn-entrar-header">Entrar</button>
                        </a>
                        
                    </nav>

                </div>
            </header>
        </div>
    );
}



export default Header