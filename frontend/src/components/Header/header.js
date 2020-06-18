import React from 'react';
import logo from '../../assets/img/LogoAtualizada.PNG';
import '../../assets/css/reset.css';
import '../../assets/css/header.css';



function Header() {
    return (
        <div>
            <header>
                <div className="menu-header-home">
                    <div className="logo-header">
                        <a href="#"><img src={logo} alt="bfriend" /></a>
                    </div>
                    <nav className="btn-header-home">
                        <button className="btn-cadastro-header">Cadastre-se</button>
                        <button className="btn-entrar-header">Entrar</button>
                    </nav>
                </div>
            </header>
        </div>
    );
}



export default Header