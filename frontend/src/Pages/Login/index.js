import React from 'react';
import '../../assets/css/style.css';
import QuaseLogo from '../../assets/img/Nome.png'


function Login() {
    return (
        <div className="fundo-cadastro">
            <div className="">
                <div className="fundo-forms col-9">
                    <div className="logo">
                        <img src={QuaseLogo} />
                        <p className="subtitulo">Aproximando pessoas. Fazendo negócios</p>
                    </div>
                    <form >
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Digite seu e-mail" />
                            </div>
                            <div class="form-group col-md-12">
                                <label htmlFor="inputPassword">Senha</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="digite sua senha" />
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
    )
} export default Login;