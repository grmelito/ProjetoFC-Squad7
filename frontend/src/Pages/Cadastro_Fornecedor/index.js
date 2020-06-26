import React from 'react';
import SelecionarFoto from "../../assets/img/AdicionarFoto.png"

function CadastroFornecedor() {
    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-loja col-9">
                        <div className="foto-usuario">
                            <img src={SelecionarFoto} className="rounded-circle"></img>
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
                                    <label htmlFor="inputPassword">Gênero</label>
                                    <input type="text" className="form-control" id="inputGenero" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword">CEP</label>
                                    <input type="text" className="form-control" id="inputCep" placeholder="08888-000" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputPassword">Endereço</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputData">Número</label>
                                    <input type="text" className="form-control" id="inputNumero" />
                                </div>
                                <div className="form-group col-md-7">
                                    <label htmlFor="inputPassword">Complemento</label>
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
                                    <button type="submit" className="btn btn-primary">Confirmar dados</button>
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
} export default CadastroFornecedor 