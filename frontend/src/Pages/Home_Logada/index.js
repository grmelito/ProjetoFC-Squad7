import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Cards from '../../components/Cards/cards';
import banner5 from '../../assets/img/banner5.png';
import '../../assets/css/reset.css';
import '../../assets/css/usuario.css';
import logo from '../../assets/img/LogoAtualizada.PNG';

function HomeLogada() {
    return (
        <div>
            <header>
                <div className="menu-header-home container-fluid">
                    <div className="logo-header">
                        <a href="#"><img src={logo} alt="bfriend" /></a>
                    </div>

                    <nav className="btn-header-home">
                       
                            <button className="btn-header" >Perfil</button>
                        
                        <button className="btn-header">Sair</button>
                       
                        
                    </nav>

                </div>
            </header>
            <div className="hero-image">
                <img className="banner" src={banner5}></img>
            </div>
            <div className="fundo-pesquisa">
                <div className="form-pl">
                    <div className="form-group col-md-4">
                        <label className="text-light " htmlFor="inputText">Oque você precisa?</label>
                        <input type="text" className="form-control" id="inputText" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail" className="text-light " >Em qual cidade?</label>
                        <input type="text" className="form-control" id="inputText2" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputText" className="text-light " >Qual bairro?</label>
                        <input type="text" className="form-control" id="inputText3"  />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
            <Cards/>
            <Footer/>
        </div>

    )
} export default HomeLogada;