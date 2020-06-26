import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Impostando Paginas
import Home from './Pages/Home'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro';
import HomeLogada from './Pages/Home_Logada';
import Sobre from './Pages/Sobre';
import Cadastro_Loja from './Pages/Cadastro_Loja'
import RecuperarSenha from './Pages/Recuperar_Senha'
import Duvidas from './Pages/Duvidas'
import Contato from './Pages/Contato'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route path="/homeLogada" component={HomeLogada}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/cadastroLoja" component={Cadastro_Loja}/>
                <Route path="/recuperarSenha" component={RecuperarSenha}/>
                <Route path="/duvidas" component={Duvidas}/>
                <Route path="/contato" component={Contato}/>
            
            </Switch>
        </BrowserRouter>
    );
};
