import React from 'react';
import SelecionarFoto from "../../assets/img/AdicionarFoto.png"

function PerfilUsuario() {
    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-loja col-9">
                        <div className="foto-usuario">
                            <img src={SelecionarFoto} className="rounded-circle"></img>
                        </div>
                        <div className="botao-cadastro">
                                    <button type="submit" className="btn btn-primary">Alterar Dados</button>
                                </div>
                        <form >
                            <div className="form-div">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputNome">Nome Completo</label>
                                    <input className="form-control" id="inputEmail4" placeholder="Nome" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="E-mail" />
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputData">Data de Nascimento</label>
                                    <input type="date" className="form-control" id="inputData" />
                                </div>
                                <div className="form-group col-md-7">
                                    <label htmlFor="inputGenero">Gênero</label>
                                    <input type="text" className="form-control" id="inputGenero" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCPF">CPF</label>
                                    <input type="text" className="form-control" placeholder="123.456.789-01" id="inputCPF" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCEP">CEP</label>
                                    <input type="text" className="form-control" id="inputCep" placeholder="08888-000" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEnderco">Endereço</label>
                                    <input type="text" className="form-control" id="inputEndereco" />
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputNumero">Número</label>
                                    <input type="text" className="form-control" id="inputNumero" />
                                </div>
                                <div className="form-group col-md-7">
                                    <label htmlFor="inputComplemento">Complemento</label>
                                    <input type="text" className="form-control" id="inputComplemento" />
                                </div>
                                <div className="form-group col-md-10">
                                    <label htmlFor="inputPassword">Bairro</label>
                                    <input type="text" className="form-control" id="inputBairro" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputData">Estado</label>
                                    <input type="text" className="form-control" id="inputNumero" />
                                </div>
                                <div className="form-group col-md-9">
                                    <label htmlFor="inputPassword">Cidade</label>
                                    <input type="text" className="form-control" id="inputComplemento" />
                                </div>
                                <div className="botao-cadastro">
                                    <button type="submit" className="btn btn-primary">Crie uma loja</button>
                                </div>
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
} export default PerfilUsuario