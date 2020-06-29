import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Cards from '../../components/Cards/cards';
import banner5 from '../../assets/img/banner5.png';
import '../../assets/css/reset.css';
import '../../assets/css/usuario.css';
import logo from '../../assets/img/LogoAtualizada.PNG';
import api from '../../services/api'
import { useState } from 'react';
import { useEffect } from 'react';

function HomeLogada() {

    const [Cidades, setCidades] = useState([]);
    const [Bairro, setBairro] = useState('');
    const [Categorias, setCategorias] = useState([]);

    const [selectedCidade, setSelectedCidade] = useState('0');
    const [selectedCategoria, setSelectedCategoria] = useState('0');
// React de Cidades
    useEffect(() => {
        api.get('cidades').then(res => {
            const cityName = res.data.map(IdCidade => IdCidade.CidadeNome);
            //console.log(cityName)
            setCidades(cityName);
        })
    }, []);

    function handleSelectCidade (event) {
        const Cidade = event.target.value

        setSelectedCidade(Cidade);
    }

    useEffect(() => {
        if(selectedCidade === '0') {
            return;
        }
    })
// React de Categorias
    useEffect(() => {
        api.get('categorias').then(res => {
            const categoriaName = res.data.map(IdCategoria => IdCategoria.CategoriaNome)
    
            setCategorias(categoriaName);
        })
    }, []);

    function handleSelectCategoria (event) {
        const Categoria = event.target.value

        setSelectedCategoria(Categoria);
    }

    useEffect(() => {
        if(selectedCategoria === '0') {
            return;
        }
    })
    
    return (
        <div>
            <header>
                <div className="menu-header-home container-fluid">
                    <div className="logo-header">
                        <a href="#"><img src={logo} alt="bfriend" /></a>
                    </div>

                    <nav className="btn-header-home">
                       
                            <button className="btn-header" >Perfil</button>
                        
                        <button className="btn-header">Sair</button>
                            
                    </nav>
                </div>
            </header>
            <div className="hero-image">
                <img className="banner" src={banner5}></img>
            </div>
            <div className="fundo-pesquisa">
                <div className="form-pl">
                    <div className="form-group col-md-4">
                        <label className="text-light " htmlFor="inputText">Em qual cidade?</label>
                        <select name="cidade" id="cidade" value={selectedCidade} onChange={handleSelectCidade}>
                        <option value ="0">Selecione uma Cidade</option>
                        {Cidades.map(Cidade => (
                            <option key={Cidade} value={Cidade}>{Cidade}</option>
                        ))}
                        </select>
                        <input type="text" className="form-control" id="inputCidade" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputText" className="text-light " >Qual Bairro?</label>
                        <input type="text" className="form-control" id="inputBairro" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputText" className="text-light " >Qual Categoria?</label>
                        <select name="categoria" id="categoria" value={selectedCategoria} onChange={handleSelectCategoria}>
                        <option value ="0">Selecione uma Categoria</option>
                        {Categorias.map(Categoria => (
                            <option key={Categoria} value={Categoria}>{Categoria}</option>
                        ))}
                        </select>
                        <input type="text" className="form-control" id="inputCategoria"  />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
            <Cards/>
            <Footer/>
        </div>

    )
} export default HomeLogada;