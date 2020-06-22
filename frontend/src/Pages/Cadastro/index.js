import React from 'react';
import '../../assets/css/style.css';
import QuaseLogo from '../../assets/img/Nome.png'


function Cadastro() {
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
                            <label htmlFor="inputNome">Nome</label>
                            <input className="form-control" id="inputEmail4" />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div class="form-group col-md-12">
                            <label htmlFor="inputPassword">Senha</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <button type="submit" className="btn btn-primary">Cadastre-se</button>
                    </div>
                </form>
                    <hr></hr>
                    <p>Já tem uma conta?</p>
            </div>
            <p>Ao se cadastrar você concorda com os Termos de Uso e a política de privacidade de BFriend.</p>
            </div>
            
            
            
        </div>
    )
} export default Cadastro;
