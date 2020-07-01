import React from 'react';
import '../../assets/css/style.css';
import FotoUsuario from "../../assets/img/Id_Rosto.png"
import SelecionarFoto from "../../assets/img/AdicionarFoto.png"
import api from '../../services/api'
import logo from '../../assets/img/LogoAtualizada.PNG';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function Cadastro_Loja() {
    const history = useHistory();
    const [Categorias, setCategorias] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState('0');

    useEffect(() => {
        api.get('categorias').then(res => {
            const categoriaName = res.data

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

    function handleLogout(){
        localStorage.clear(); 

        history.push('/');
    }

    return (
        <div>
            <header>
                <div className="menu-header-home container-fluid">
                    <div >
                        <a href="#"><img className="logo-header" src={logo} alt="bfriend" /></a>
                    </div>

                    <nav className="btn-header-home">

                        <a href="/perfilUsuario"><button className="btn-header" >Perfil</button></a>

                        <button className="btn-header" onClick={handleLogout}>Sair</button>

                    </nav>
                </div>
            </header>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-loja col-9">
                        <div className="foto-usuario">
                            <img src={FotoUsuario} className="rounded-circle usuario"></img>
                        </div>
                        <form >
                            <div className="form-div">
                                <div className="form-group col-md-12">

                                    <input className="input-cadloja" id="inputEmail4" placeholder="Nome da Loja" />
                                </div>
                                <div className="form-group col-md-12">

                                    <input className="input-cadloja" id="inpufacebook" placeholder="Facebook" />
                                </div>

                                <div className="form-group col-md-12">

                                    <input className="input-cadloja" id="inputintagram" placeholder="Instagram" />
                                </div>

                                <div className="form-group col-md-12">

                                    <input className="input-cadloja" id="inputSite" placeholder="Site" />
                                </div>

                                <div className="form-group col-md-12">

                                    <input type="text" className="form-grande" id="inputDescricaoLoja" placeholder="Descrição" />
                                </div>
                                <div className="form-group col-md-6">

                                    <input type="text" className="input-cadloja" id="inputCelular" placeholder="Celular/WhatsApp" />
                                </div>
                                <div className="form-group col-md-6">

                                    <select className="form-control" name="categoria" id="categoria" value={selectedCategoria} onChange={handleSelectCategoria}>
                                        <option value="0">Selecione uma Categoria</option>
                                        {Categorias.map(Categoria => (
                                            <option key={Categoria.IdCategoria} value={Categoria.IdCategoria}>{Categoria.CategoriaNome}</option>
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
                    <p>Ao cadastrar sua loja você concorda com os <a className="redirect">Termos de Uso  </a> e a <a className="redirect">Política de Privacidade</a> de BFriend.</p>
                </div>
            </div>

        </div>
    )
} export default Cadastro_Loja;