import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Impostando Paginas
import Home from './Pages/Home'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro';
import HomeLogada from './Pages/Home_Logada';
import Sobre from './Pages/Sobre';
import Cadastro_Loja from './Pages/Cadastro_Loja';
import RecuperarSenha from './Pages/Recuperar_Senha';
import Duvidas from './Pages/Duvidas';
import Contato from './Pages/Contato';
import CadastroFornecedor from './Pages/Cadastro_Fornecedor';
import Loja from './Pages/Loja';
import PerfilUsuario from './Pages/Perfil_Usuario'

const isAuth = () => localStorage.getItem('token');
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
    
        <Route {...rest} render={props => (
            isAuth() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
    };

export default function Routes() {   

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />
                <PrivateRoute path="/homeLogada" component={HomeLogada} />
                <Route path="/sobre" component={Sobre} />
                <PrivateRoute path="/cadastroLoja" component={Cadastro_Loja} />
                <Route path="/duvidas" component={Duvidas} />
                <Route path="/contato" component={Contato} />
                <PrivateRoute path="/cadastroFornecedor" component={CadastroFornecedor} />
                <Route path="/loja" component={Loja} />
                <PrivateRoute path="/perfilUsuario" component={PerfilUsuario}/>
                <Route path="/recuperarSenha" component={RecuperarSenha}/>
            </Switch>
        </BrowserRouter>
    );
};
