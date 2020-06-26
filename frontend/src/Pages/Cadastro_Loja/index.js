import React from 'react';
import '../../assets/css/style.css';
import FotoUsuario from "../../assets/img/Id_Rosto.png"
import SelecionarFoto from "../../assets/img/AdicionarFoto.png"

function Cadastro_Loja() {
    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-loja col-9">
                        <div className="foto-usuario">
                            <img src={FotoUsuario} className="rounded-circle usuario"></img>
                        </div>
                        <form >
                            <div className="form-div">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputNome">Nome</label>
                                    <input className="form-control" id="inputEmail4" placeholder="Nome" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputDescricao">Descrição</label>
                                    <input type="text" className="form-grande" id="inputEmail4" placeholder="" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCelular">Celular/WhatsApp</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Cel:(WhatsApp)" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCategoria">Categoria</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Categoria" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputPassword4" placeholder="usuario@gmail.com" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCpf">CPF</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="123.456.789-01" />
                                </div>
                                <div className="selecionar-fotos col-md-12">
                                    <label>Inserir pelo menos 4 fotos</label>
                                    <div className="colunas col-md-12">
                                        <img src={SelecionarFoto}></img>
                                        <img src={SelecionarFoto}></img>
                                        <img src={SelecionarFoto}></img>
                                        <img src={SelecionarFoto}></img>
                                    </div>
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Cadastrar</button>
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