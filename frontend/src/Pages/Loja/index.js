import React, { useState, useEffect } from 'react';
import '../../assets/css/reset.css';
import '../../assets/css/style.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import api from '../../services/api'

function Loja() {
    const token = localStorage.getItem('token')

    const [Anuncio, setAnuncio] = useState([])

    const id = 25

    useEffect(() => {
        const res = api.get(`anuncio/${id}` , {
           headers: {
               'auth-token': token 
           },
       }).then(res => {
           setAnuncio(res.data);
       })}, []);


    return (
        <div>
            <Header />
            <section className="conteiner-loja">
                {Anuncio.map(Anuncio =>
                <h1 className="nome-loja col-10">{Anuncio.Titulo}</h1>
                )}
                {Anuncio.map(Anuncio =>
                <div className="top-loja col-11">
                <h2 className="subnome-loja">{Anuncio.CategoriaNome}</h2>
                    <a href="/cadastroLoja">Editar Loja</a>
                </div>
                )}
                <div className="galeria-loja col-12">
                    {Anuncio.map(Anuncio => (
                    <div className="img-1 ">
                        <img key={Anuncio} src={'http://localhost:3333/uploads/' + Anuncio.ImagemAnuncio} width='220' height='200' />
                    </div>
                    ))}
                    <div className="img-2">

                    </div>

                    <div className="img-3">

                    </div>

                    <div className="img-4">

                    </div>
                </div>
                {Anuncio.map(Anuncio =>
                <div className="box-loja">
                    <div className="loja-descricao col-5">
                        <p className="p-descricao">{Anuncio.Descricao}</p>
                    </div>
                    <div className="dados-loja col-5">
                        <div className="img-perfil-loja">
                        </div >
                        <div className="loja-cont" >
                            <p className="p-info" >Herbert Thomas Cardoso</p>
                            <div className="loja-info">
                                <p className="p-info">{Anuncio.Telefone}</p>
                            </div>

                            <div className="loja-info">
                                <p className="p-info"> herbertthomasgja@gmail.com  </p>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </section>
            <Footer />
        </div>

    );
}

export default Loja;