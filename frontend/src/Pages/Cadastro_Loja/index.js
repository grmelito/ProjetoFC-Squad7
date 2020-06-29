import React from 'react';
import '../../assets/css/style.css';
import FotoUsuario from "../../assets/img/Id_Rosto.png"
import SelecionarFoto from "../../assets/img/AdicionarFoto.png"
import api from '../../services/api'
import { useState } from 'react';
import { useEffect } from 'react';

function Cadastro_Loja() {

    const [Categorias, setCategorias] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState('0');

    useEffect(() => {
        api.get('categorias').then(res => {
            const categoriaName = res.data.map(IdCategoria => IdCategoria.CategoriaNome)

            setCategorias(categoriaName);
        })
    }, []);

    function handleSelectCategoria(event) {
        const Categoria = event.target.value

        setSelectedCategoria(Categoria);
    }

    useEffect(() => {
        if (selectedCategoria === '0') {
            return;
        }
    })

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
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="usuario@gmail.com" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputDescricao">Descrição</label>
                                    <input type="text" className="form-grande" id="inputDescricaoLoja" placeholder="" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCelular">Celular/WhatsApp</label>
                                    <input type="text" className="form-control" id="inputCelular" placeholder="Cel:(WhatsApp)" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCategoria">Categoria</label>
                                    <select className="form-control" name="categoria" id="categoria" value={selectedCategoria} onChange={handleSelectCategoria}>
                                        <option value="0">Selecione uma Categoria</option>
                                        {Categorias.map(Categoria => (
                                            <option key={Categoria} value={Categoria}>{Categoria}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="selecionar-fotos col-md-12">
                                    <label className="label-fotos">Inserir pelo menos 4 fotos</label>
                                    <div className="colunas col-md-12">
                                        <img src={SelecionarFoto}></img>
                                        <img src={SelecionarFoto}></img>
                                        <img src={SelecionarFoto}></img>
                                        <img src={SelecionarFoto}></img>
                                    </div>
                                </div>
                                <div className="botao-cadastro">
                                    <button type="submit" className="btn btn-primary">Cadastrar</button>
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
} export default Cadastro_Loja;