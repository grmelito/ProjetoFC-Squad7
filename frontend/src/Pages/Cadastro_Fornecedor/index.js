import React from 'react';
import SelecionarFoto from "../../assets/img/AdicionarFoto.png"
import api from '../../services/api'
import { useState } from 'react';
import { useEffect } from 'react';

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
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputData">Estado</label>
                                    <input type="text" className="form-control" id="inputNumero" />
                                </div>
                                <div className="form-group col-md-9">
                                    <label htmlFor="inputPassword">Cidade</label>
                                    <select className="form-control" name="cidade" id="cidade" value={selectedCidade} onChange={handleSelectCidade}>
                                        <option value="0">Selecione uma Cidade</option>
                                        {Cidades.map(Cidade => (
                                            <option key={Cidade} value={Cidade}>{Cidade}</option>
                                        ))}
                                    </select>
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