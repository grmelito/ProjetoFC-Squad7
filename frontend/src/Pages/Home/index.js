import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
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
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

// Importando imagens
import hamburguer from '../../assets/img/burger_Vegan.png';
import coxinha from '../../assets/img/coxinhas.png';
import massas from '../../assets/img/Massas.png';
import marmita from '../../assets/img/marmita.png';
import faz_tudo from '../../assets/img/encanador.png';
import casa_forca from '../../assets/img/eletricista.png';
import mecanica from '../../assets/img/mecanico.png';
import costura from '../../assets/img/costureira.png';
import cell from '../../assets/img/celular.png';
import conserto from '../../assets/img/Tves.png';
import tela from '../../assets/img/Tela.png';
import som from '../../assets/img/Som.png';
import art from '../../assets/img/artesanato1.png';
import vasos from '../../assets/img/artesanato2.png';
import almofa from '../../assets/img/artesanato3.png';
import objeto from '../../assets/img/artesanato4.png';
import  programa from '../../assets/img/curso1.png';
import excel from '../../assets/img/curso2.png';
import danca from '../../assets/img/curso3.png';
import arte from '../../assets/img/curso4.png';
import roupa from '../../assets/img/roupa1.png';
import bone from '../../assets/img/roupa2.png';
import calca from '../../assets/img/roupa3.png';
import loja from '../../assets/img/roupa4.png';

import icone from '../../assets/img/IconeCards.png'



function Home() {

    return (
        <div>
            <Header />
            {/* Botões */}
            <section id="banner-home">
                <div className="">

                    <div className="hero-image">
                        <img className="banner" src={banner}></img>
                    </div>

                    <div className="botoes">

                        <div className="">
                            <div className="icones">
                                <a href="#card-alimentacao"><img className="rounded-circle min" src={botaoAlimentacao} alt="alimentacao" /></a>
                            </div>
                            <p>Alimentacao </p>
                        </div>

                        <div className="">
                            <div className="icones">
                                <a href="#card-artesanato"><img className="rounded-circle min" src={botaoArtesanato} alt="artesanato" /></a>
                            </div>
                            <p>Artesanato </p>
                        </div>

                        <div className="">
                            <div className="icones">
                                <a href="#card-casa"><img className="rounded-circle min" src={botaoCasa} alt="vestuario" /></a>
                            </div>
                            <p className="btn-casa">Casa</p>
                        </div>

                        <div className="">
                            <div className="icones">
                                <a href="#card-vestuaria"><img className="rounded-circle min" src={botaoVestuario} alt="vestuario" /></a>
                            </div>
                            <p className="btn-vestuaria">Vestuario </p>
                        </div>

                        <div className="">
                            <div className="icones">
                                <a href="#card-cursos"><img className="rounded-circle min" src={botaoAulas} alt="esporte e lazer" /></a>
                            </div>
                            <p className="btn-cursos">Cursos</p>
                        </div>

                        <div className="">
                            <div className=" icones">
                                <a href="#"><img className="rounded-circle min" src={botaoEletronicos} alt="eletronicos e acessorios" /></a>
                            </div>
                            <p>Eletrônicos </p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="card-alimentacao" className="card-section" >

                <div className="card-name">
                    <h3 className="h3-card"><img className="icone-cards" src={icone} />Alimentação</h3>
                </div>

                <div className="container-cards">

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <div className="card-img">
                                <CardImg top width="100%" src={hamburguer} alt="Card image cap" />
                            </div>
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Hamburguer Gourmet</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Quer comer aquele salgado? vaifazer</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>


                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={coxinha} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Super Salgados</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Quer comer aquele salgado? vaifazer </CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={massas} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Massas da Mama</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Nós fazemos a melhor massa caseira da.</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio" >
                            <CardImg top width="100%" src={marmita} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Kilo do Bairro</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Quer comer aquela marmita em casa.</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>


            <section id="card-artesanato" className="card-section" >

                <div className="card-name">
                    <h3 className="h3-card"><img className="icone-cards" src={icone} />Artesanato</h3>
                </div>

                <div className="container-cards">

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <div className="card-img">
                                <CardImg top width="100%" src={art} alt="Card image cap" />
                            </div>
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Atesanato Assis</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Quer estilo e beleza, dentro</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>


                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={vasos} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title"> Minas G </CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Arte diretamente de Minhas Gerais </CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={almofa} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Tecidos Tete</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Peças exclusivas para a sua casa.</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio" >
                            <CardImg top width="100%" src={objeto} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Antiguidades</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Lorem ipsum dolor si.</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="card-casa" className="card-section" >
                <div className="card-name">
                    <h3 className="h3-card"><img className="icone-cards" src={icone} />Casa</h3>
                </div>


                <div className="container-cards">
                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={faz_tudo} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Dr Faz Tudo</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">O melhor hamburger vegano do litoral paulista.</CardText>
                                <Button className="card-btn">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={casa_forca} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Casa de Força</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Quer comer aquele salgado? vaifazer </CardText>
                                <Button className="card-btn">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={mecanica} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Bira Auto Mecânica</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Nós fazemos a melhor massa caseira da.</CardText>
                                <Button className="card-btn">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio" >
                            <CardImg top width="100%" src={costura} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Alta Costura</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Quer comer aquela marmita em casa.</CardText>
                                <Button className="card-btn">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>

            </section>

            <section id="card-vestuaria" className="card-section" >

                <div className="card-name">
                    <h3 className="h3-card"><img className="icone-cards" src={icone} />Vestuária</h3>
                </div>

                <div className="container-cards">

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <div className="card-img">
                                <CardImg top width="100%" src={roupa} alt="Card image cap" />
                            </div>
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Loja Masculinah</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Estilo para todos os homens</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>


                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={bone} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Super Blusinha</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Blusinhas para todos os gostos </CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={calca} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Biquineh</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">O estilo para aaa moda praia para quem vvd fwr</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio" >
                            <CardImg top width="100%" src={loja} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Estilo do Bairro</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">O estilo do bairro pensa lorem lorem lorem loren lorem lorem</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="card-cursos" className="card-section" >

                <div className="card-name">
                    <h3 className="h3-card"><img className="icone-cards" src={icone} />Cursos</h3>
                </div>

                <div className="container-cards">

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <div className="card-img">
                                <CardImg top width="100%" src={programa} alt="Card image cap" />
                            </div>
                            <CardBody className="body-card">
                                <CardTitle className="card-title">CD Agora</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Quer aprender sa aaa aa</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>


                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={excel} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Super Cursos</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Domine o excel e mude a sua carreira para sempren </CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={danca} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Studio Dance</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Nós fazemos a melhor por você para liberar.</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio" >
                            <CardImg top width="100%" src={arte} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Contempore</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Expresse o que a de melhor . Com a contempore.</CardText>
                                <Button outline color="primary">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="card-eletronico" className="card-section" >

                <div className="card-name">
                    <h3 className="h3-card"><img className="icone-cards" src={icone} />Eletrônicos</h3>
                </div>

                <div className="container-cards">
                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={cell} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Vida Cell</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">O melhor hamburger vegano do litoral paulista.</CardText>
                                <Button className="card-btn">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>


                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={conserto} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Conserto Tvs</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Quer comer aquele salgado? vaifazer </CardText>
                                <Button className="card-btn">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio">
                            <CardImg top width="100%" src={tela} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Conserto Tvs</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Nós fazemos a melhor massa caseira da.</CardText>
                                <Button className="card-btn">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="item-cards">
                        <Card className="card-inicio" >
                            <CardImg top width="100%" src={som} alt="Card image cap" />
                            <CardBody className="body-card">
                                <CardTitle className="card-title">Conserto Som</CardTitle>
                                <hr className="hr-card"></hr>
                                <CardText className="card-text">Quer comer aquela marmita em casa.</CardText>
                                <Button className="card-btn">Saiba mais</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    );
}

export default Home;