import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/css/style.css';
import api from '../../services/api';
import Logo from '../../assets/img/LogoAtualizada.PNG'


function Cadastro() {
    const [Nome, setNome] = useState('')
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')

    const history = useHistory()

    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            Nome,
            Email,
            Senha
        }
        try {
            const res = await api.post('register', data);
            alert('Cadastro realizado com sucesso!')

            history.push('/login')
        } catch (err) {
            alert('Erro ao se cadastrar, tente novamente!')
        }
    }

    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-forms col-9">
                        <div className="logo">
                            <div className="logo-conteudo">
                                <img className="logo-forms" src={Logo} />
                                <p className="subtitulo">Aproximando pessoas. Fazendo negócios</p>
                            </div>
                        </div>

                        <form onSubmit={handleCadastro}>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputNome">Nome</label>
                                    <input className="form-control input-tm" id="inputEmail4" placeholder="Nome"
                                        value={Nome} onChange={e => setNome(e.target.value)} required/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control input-tm" id="inputEmail4" placeholder="E-mail"
                                        value={Email} onChange={e => setEmail(e.target.value)} required/>
                                </div>
                                <div class="form-group col-md-12">
                                    <label htmlFor="inputPassword">Senha</label>
                                    <input type="password" className="form-control input-tm" id="inputPassword4" placeholder="Senha"
                                        value={Senha} onChange={e => setSenha(e.target.value)} required/>
                                </div>
                                <button type="submit" className="btn btn-primary">Cadastre-se</button>
                            </div>
                        </form>
                        <hr></hr>
                        <p>Já tem uma conta?<a href="/login" className="redirect">Faça Login</a></p>
                    </div>
                    <p>Ao se cadastrar você concorda com os <a className="redirect">Termos de Uso  </a> e a <a className="redirect">Política de Privacidade</a> de BFriend.</p>
                </div>
            </div>
        </div>

    )
} export default Cadastro;
