import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Cards from './components/Cards/cards';
import './assets/css/style.css'
//importação das imagens
import botaoAlimentacao from './assets/img/alimentacao.svg';
import botaoArtesanato from './assets/img/artesanato.svg';
import botaoCasa from './assets/img/casa.svg';
import botaoAulas from './assets/img/cursos.svg';
import botaoEletronicos from './assets/img/eletronicos.svg';
import botaoServicos from './assets/img/manutencao.svg';
import botaoVestuario from './assets/img/vestuaria.svg';
import botaoEsporte from './assets/img/esporte.svg';
import banner from './assets/img/BannerHome.png';


function App() {
  return (
    <div>
      <Header/>

        <section id="banner-home"> 
        <div class="">
                
                <div class="banner">
                    <img src={banner}/>
                </div>
                
                <div class="botoes">
                    <div class="">
                        <div class="d-flex justify-content-center icones">
                            <a href="#"><img class="rounded-circle" src={botaoServicos} alt="servicos diversos"/></a>
                        </div>
                        <p>Servicos Diversos </p>
                    </div>

                    <div class="">
                        <div class="d-flex justify-content-center icones">
                            <a href="#"><img class="rounded-circle" src={botaoEletronicos} alt="eletronicos e acessorios"/></a>
                        </div>
                        <p>Eletrônicos e Acessorios </p>
                    </div>

                    <div class="">
                        <div class="d-flex justify-content-center icones">
                            <a href="#"><img class="rounded-circle" src={botaoArtesanato} alt="artesanato"/></a>
                        </div>
                        <p>Artesanato </p>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-center icones">
                            <a href="#"><img class="rounded-circle" src={botaoAulas} alt="aulas e consultorias"/></a>
                        </div>
                        <p>Aulas e Consultoria </p>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-center icones">
                            <a href="#"><img class="rounded-circle" src={botaoCasa} alt="reparos domesticos"/></a>
                        </div>
                        <p>Reparos Domesticos </p>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-center icones">
                          <a href="#"><img class="rounded-circle" src={botaoEsporte} alt="esporte e lazer"/></a>
                        </div>
                        <p>Esporte e Lazer </p>
                    </div>

                    <div class="">
                        <div class="d-flex justify-content-center icones">
                            <a href="#"><img class="rounded-circle" src={botaoVestuario} alt="vestuario"/></a>
                        </div>
                        <p>Vestuario </p>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-center icones">
                            <a href="#"><img class="rounded-circle" src={botaoAlimentacao} alt="alimentacao"/></a>
                        </div>
                        <p>Alimentacao </p>
                    </div>
            </div>

            </div>
        </section>
        <Cards/>
        <Footer/>

    </div>
  );
}

export default App;

