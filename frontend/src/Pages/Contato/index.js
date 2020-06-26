import React from 'react';
import ilustrativa from '../../assets/img/Contatoimg.png';
import Logo from '../../assets/img/LogoAtualizada.PNG';
import Contatos from '../../assets/img/Contatos.png';
import '../../assets/css/style.css';

function Contato() {
    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-forms col-9">
                        <div className="img-ilustrativa">
                            <img src={ilustrativa} />

                        </div>
                        <h1>Precisa falar com a gente?</h1>
                        <p className="txt-sobre">Ola tudo bem? Se você chegou até aqui é porque precisa falar com a gente de uma
                        forma especial né? Então tudo que fazemos é para melhorar a sua vida e ouvir você é a melhor forma de fazer isso.
                        Fique a vontade para elogiar, fazer pedido, ou até dar sugestões de melhorias na nossa plataforma. Assim podemos entender
                        melhor suas dores e nossa
                        equipe entregar melhorias no nosso produto. Lembre-se você é a razão da nossa existência.</p>
                        <br></br>
                        <img src={Contatos}></img>



                        <div className="pseudo-footer">
                            <img src={Logo} />
                            <p className="subtitulo">Aproximando pessoas. Fazendo negócios</p>
                        </div>

                    </div>

                    <p>Ao se cadastrar você concorda com os
                        <a className="redirect">Termos de Uso  </a> e a <a className="redirect">Política de Privacidade</a> de BFriend.</p>

                </div>
            </div>
        </div>
    )
} export default Contato;