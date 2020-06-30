import React from 'react';
import SelecionarFoto from "../../assets/img/AdicionarFoto.png"
import api from '../../services/api'
import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../../assets/img/LogoAtualizada.PNG';

function CadastroFornecedor() {

    const [Cidades, setCidades] = useState([]);
    const [selectedCidade, setSelectedCidade] = useState('0')

    useEffect(() => {
        api.get('cidades').then(res => {
            const cityName = res.data.map(IdCidade => IdCidade.CidadeNome);
            //console.log(cityName)
            setCidades(cityName);
        })
    }, []);

    function handleSelectCidade(event) {
        const Cidade = event.target.value

        setSelectedCidade(Cidade);
    }

    useEffect(() => {
        if (selectedCidade === '0') {
            return;
        }
    })


    return (
        <div>
            <header>
                <div className="menu-header-home container-fluid">
                    <div >
                        <a href="#"><img className="logo-header" src={logo} alt="bfriend" /></a>
                    </div>

                    <nav className="btn-header-home">
                       
                            <button className="btn-header" >Perfil</button>
                        
                        <button className="btn-header">Sair</button>
                            
                    </nav>
                </div>
            </header>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-loja col-9">
                        <div className="foto-usuario">
                            <img src={SelecionarFoto} className="rounded-circle"></img>
                        </div>
                        <form >
                            
                            <div className="form-div">
                                <div className="form-group col-md-12">
                                    <input className="form-control" id="inputEmail4" placeholder="Nome Completo" />
                                </div>
                                <div className="form-group col-md-12">
                                    
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-5">
                                    
                                    <input type="date" className="form-control" id="inputData" placeholder="Data de Nascimento" />
                                </div>
                                <div className="form-group col-md-7">
                                    
                                    <input type="text" className="form-control" id="inputGenero" placeholder="Gênero" />

                                </div>
                                
                                <div className="form-group col-md-6">
                                    
                                    <input type="text" className="form-control" placeholder="CPF" id="inputCPF" />
                                </div>
                                <div className="form-group col-md-6">
                                    
                                    <input type="text" className="form-control" id="inputCep" placeholder="CEP" />
                                </div>
                                <div className="form-group col-md-3">
                                    
                                    <input type="text" className="form-control" id="inputNumero" placeholder="Estado" />
                                </div>
                                <div className="form-group col-md-9">
                                    
                                    <select className="form-control" name="cidade" id="cidade" value={selectedCidade} onChange={handleSelectCidade}>
                                        <option value="0">Selecione uma Cidade</option>
                                        {Cidades.map(Cidade => (
                                            <option key={Cidade} value={Cidade}>{Cidade}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    
                                    <input type="text" className="form-control" id="inputEndereco" placeholder="Endereço" />
                                </div>
                                <div className="form-group col-md-5">
                                    
                                    <input type="text" className="form-control" id="inputNumero" placeholder="Número"/>
                                </div>
                                <div className="form-group col-md-7">
                                    
                                    <input type="text" className="form-control" id="inputComplemento" placeholder="Complemento"/>
                                </div>
                                <div className="form-group col-md-10">
                                    
                                    <input type="text" className="form-control" id="inputBairro" placeholder="Bairro"/>
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