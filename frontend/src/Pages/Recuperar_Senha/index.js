import React from 'react'
import '../../assets/css/style.css';

import QuaseLogo from '../../assets/img/Nome.png'

function RecuperarSenha() {
    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-forms col-9">
                        <div className="logo">
                            <img src={QuaseLogo} />
                            <p className="subtitulo">Aproximando pessoas. Fazendo negócios</p>
                        </div>
                        <form >
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEmail">Nome</label>
                                    <input type="txt" className="form-control" id="inputTxt" placeholder="Nome" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label htmlFor="inputPassword">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="usuario@gmail.com" />
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                        <hr></hr>
                        <p>Vamos te ajudar.<a className="redirect">Confira seu email</a></p>
                    </div>

                    <div className="text-temos">
                        <p>Ao se cadastrar você concorda com os <a className="redirect">Termos de Uso  </a> e a <a className="redirect">Política de Privacidade</a> de BFriend.</p>
                    </div>
                </div>
            </div>
        </div>

    )
} export default RecuperarSenha;