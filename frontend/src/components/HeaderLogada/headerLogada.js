import React from 'react';
import logo from '../../assets/img/LogoAtualizada.PNG';
import '../../assets/css/reset.css';
import '../../assets/css/header.css';




function HeaderLogada() {
    return (
        <div>
            <header>
                <div className="menu-header-home container-fluid">
                    <div >
                        <a href="#"><img className="logo-header" src={logo} alt="bfriend" /></a>
                    </div>

                    <nav className="btn-header-home">

                        <a href="/perfilUsuario"><button className="btn-header" >Perfil</button></a>

                        <button className="btn-header" onClick={handleLogout}>Sair</button>

                    </nav>
                </div>
            </header>
        </div>
    );
}



export default HeaderLogada