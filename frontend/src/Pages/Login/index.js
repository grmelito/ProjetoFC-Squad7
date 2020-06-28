import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/css/style.css';
import api from '../../services/api'
import Logo from '../../assets/img/LogoAtualizada.PNG'


function Login() {
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')

    const history = useHistory()
    async function handleLogin (e) {
        e.preventDefault();

        const data ={
            Email,
            Senha
        }
        try {
            const res = await api.post('login', data);
            localStorage.setItem('token', res.data)

            history.push('/homeLogada')
        } catch(err) {
            alert('Erro de login, tente novamente!')
        }
        
    }

    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-forms col-9">
                        <div className="logo">
                            <img src={Logo} />
                            <p className="subtitulo">Aproximando pessoas. Fazendo negócios</p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control" 
                                    id="inputEmail4" placeholder="Digite seu e-mail"
                                    value={Email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div class="form-group col-md-12">
                                    <label htmlFor="inputPassword">Senha</label>
                                    <input type="password" className="form-control"
                                     id="inputPassword4" placeholder="Digite sua senha"
                                     value={Senha} onChange={e => setSenha(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary">Cadastre-se</button>
                            </div>
                        </form>
                        <hr></hr>
                        <p>Não tem uma conta?<a className="redirect">Cadastre-se</a></p>
                    </div>

                    <div className="text-temos">
                        <p>Ao se cadastrar você concorda com os <a className="redirect">Termos de Uso  </a> e a <a className="redirect">Política de Privacidade</a> de BFriend.</p>
                    </div>
                </div>
            </div>
        </div>

    )
} export default Login;