import React from 'react';
import SelecionarFoto from "../../assets/img/AdicionarFoto.png"
import api from '../../services/api'
import { useState } from 'react';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import logo from '../../assets/img/LogoAtualizada.PNG';

function CadastroFornecedor() {
    const token = localStorage.getItem('token')
    const history = useHistory()

    const [Perfil, setPerfil] = useState([])
    const [CPFouCNPJ, setCPFouCNPJ] = useState('')
    const [Cep, setCep] = useState('')
    const [Rua, setRua] = useState('')
    const [Numero, setNumero] = useState('')
    const [Complemento, setComplemento] = useState('')
    const [Bairro, setBairro] = useState('')

    const [Cidades, setCidades] = useState([]);
    const [selectedCidade, setSelectedCidade] = useState('0')

    useEffect(() => {
        api.get('cidades').then(res => {
            const cityName = res.data
        
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

    useEffect(() => {
        const res = api.get('profile', {
           headers: {
               'auth-token': token 
           },
       }) .then(res => {
           setPerfil(res.data);
       })}, []);

    function handleLogout(){
        localStorage.clear(); 

        history.push('/');
    }

    async function handleUpgrade(e) {
        e.preventDefault();

        const IdCidade = selectedCidade
        const dataUpgrade = {CPFouCNPJ}
        const data = {
            Cep,
            Rua,
            Numero,
            Complemento,
            Bairro,
            IdCidade
        }
        try {
            const res = await api.post('create/endereco', data, {
                headers: {
                    'auth-token': token
                },
            })

            const upgrade = await api.post('upgrade/usuario', dataUpgrade, {
                headers: {
                    'auth-token': token
                },
            })
            localStorage.setItem('token', upgrade.data)
            alert('Upgrade Realizado com sucesso!')
            history.push('/cadastroLoja')
        } catch (err) {
            alert('Erro ao realizar o Upgrade!')
        }
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
                        {Perfil.map(Perfil =>
                            <img src={'http://localhost:3333/uploads/' + Perfil.ImagemUsuario} 
                            className="rounded-circle" width='130' height='130'></img>
                        )}
                        </div>
                        <form onSubmit={handleUpgrade}>
                            <div className="form-div">
                               
                                <div className="form-group col-md-6">
                                    
                                    <input type="text" className="form-control" placeholder="CPF ou CNPJ" id="inputCPF"
                                    value={CPFouCNPJ} onChange={e => setCPFouCNPJ(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    
                                    <input type="text" className="form-control" id="inputCep" placeholder="CEP"
                                    value={Cep} onChange={e => setCep(e.target.value)} />
                                </div>
                                
                                <div className="form-group col-md-6">
                                    
                                    <select className="form-control" name="cidade" id="cidade" value={selectedCidade} onChange={handleSelectCidade}>
                                        <option value="0">Selecione uma Cidade</option>
                                        {Cidades.map(Cidade => (
                                            <option key={Cidade.IdCidade} value={Cidade.IdCidade}>{Cidade.CidadeNome}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    
                                    <input type="text" className="form-control" id="inputEndereco" placeholder="Endereço"
                                    value={Rua} onChange={e => setRua(e.target.value)} />
                                </div>
                                <div className="form-group col-md-5">
                                    
                                    <input type="text" className="form-control" id="inputNumero" placeholder="Número"
                                    value={Numero} onChange={e => setNumero(e.target.value)}/>
                                </div>
                                <div className="form-group col-md-7">
                                    
                                    <input type="text" className="form-control" id="inputComplemento" placeholder="Complemento"
                                    value={Complemento} onChange={e => setComplemento(e.target.value)}/>
                                </div>
                                <div className="form-group col-md-10">
                                    
                                    <input type="text" className="form-control" id="inputBairro" placeholder="Bairro"
                                    value={Bairro} onChange={e => setBairro(e.target.value)}/>
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