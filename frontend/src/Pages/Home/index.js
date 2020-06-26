import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Cards from '../../components/Cards/cards';
import '../../assets/css/style.css'
//importação das imagens
import botaoAlimentacao from '../../assets/img/alimentacao.svg';
import botaoArtesanato from '../../assets/img/artesanato.svg';
import botaoCasa from '../../assets/img/casa.svg';
import botaoAulas from '../../assets/img/cursos.svg';
import botaoEletronicos from '../../assets/img/eletronicos.svg';
import botaoServicos from '../../assets/img/manutencao.svg';
import botaoVestuario from '../../assets/img/vestuaria.svg';
import botaoEsporte from '../../assets/img/esporte.svg';
import banner from '../../assets/img/Banner.png';


function Home() {
    return (
        <div>
            <Header />

            <section id="banner-home">
                <div className="">

                    <div className="hero-image">
                        <img className="banner" src={banner}></img>
                    </div>

                    <div className="botoes">

                        <div className="">
                            <div className="d-flex justify-content-center icones">
                                <a href="#card-serviços_lar"><img className="rounded-circle min" src={botaoServicos} alt="serviços diversos" /></a>
                            </div>
                            <p>Servicos Diversos </p>
                        </div>

                        <div className="">
                            <div className="d-flex justify-content-center icones">
                                <a href="#"><img className="rounded-circle min" src={botaoEletronicos} alt="eletronicos e acessórios" /></a>
                            </div>
                            <p>Eletrônicos e Acessorios </p>
                        </div>

                        <div className="">
                            <div className="d-flex justify-content-center icones">
                                <a href="#"><img className="rounded-circle min" src={botaoArtesanato} alt="artesanato" /></a>
                            </div>
                            <p>Artesanato </p>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-center icones">
                                <a href="#"><img className="rounded-circle min" src={botaoAulas} alt="aulas e consultorias" /></a>
                            </div>
                            <p>Aulas e Consultoria </p>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-center icones">
                                <a href="#card-Reparos"><img className="rounded-circle min" src={botaoCasa} alt="reparos domésticos" /></a>
                            </div>
                            <p>Reparos Domésticos </p>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-center icones">
                                <a href="#"><img className="rounded-circle min" src={botaoEsporte} alt="esporte e lazer" /></a>
                            </div>
                            <p>Esporte e Lazer </p>
                        </div>

                        <div className="">
                            <div className="d-flex justify-content-center icones">
                                <a href="#"><img className="rounded-circle min" src={botaoVestuario} alt="vestuario" /></a>
                            </div>
                            <p>Vestuario </p>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-center icones">
                                <a href="#card-alimentacao"><img className="rounded-circle min" src={botaoAlimentacao} alt="alimentacao" /></a>
                            </div>
                            <p>Alimentacao </p>
                        </div>
                    </div>

                </div>
            </section>
            <Cards />
            <Footer />

        </div>
    );
}

export default Home;