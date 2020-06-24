import React from 'react';
import '../../assets/css/style.css';

function Cadastro_Loja() {
    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-loja col-9">
                        <div className="foto-usuario">
                            <img className="rounded-circle"></img>
                            <p className="subtitulo">Aproximando pessoas. Fazendo negócios</p>
                        </div>
                        <form >
                            <div className="form-div">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputNome">Nome</label>
                                    <input className="form-control" id="inputEmail4" placeholder="Nome" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="text" className="form-grande" id="inputEmail4" placeholder="E-mail" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword">Senha</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword">Senha</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword">Senha</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword">Senha</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
                                </div>
                                <button type="submit" className="btn btn-primary">Cadastre-se</button>
                            </div>
                        </form>
                        <hr></hr>
                        <div className="mini-footer">
                            <p className="subtitulo">Revise seus dados Antes de Confirmar</p>
                        </div>

                    </div>
                    <p>Ao se cadastrar você concorda com os <a className="redirect">Termos de Uso  </a> e a <a className="redirect">Política de Privacidade</a> de BFriend.</p>
                </div>
            </div>
        </div>
    )
} export default Cadastro_Loja;