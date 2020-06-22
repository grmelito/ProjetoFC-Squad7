import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Impostando Paginas
import Home from './Pages/Home'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    );
};
