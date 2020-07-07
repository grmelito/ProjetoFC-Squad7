import React, { useState, useEffect } from 'react';
import '../../assets/css/reset.css';
import '../../assets/css/style.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import api from '../../services/api'
import SelecionarFoto from "../../assets/img/AdicionarFoto.png";

function Loja() {
    const token = localStorage.getItem('token')
    const idLoja = localStorage.getItem('IdAnuncio')

    const [Anuncio, setAnuncio] = useState([])
    const [Perfil, setPerfil] = useState([])

    const id = idLoja

    useEffect(() => {
        const res = api.get(`anuncio/${id}` , {
           headers: {
               'auth-token': token 
           },

       }).then(res => {
           setAnuncio(res.data);
       })}, []);

    //    useEffect(() => {
    //     const res = api.get('profile' , {
    //        headers: {
    //            'auth-token': token 
    //        },

    //    }).then(res => {
    //        setPerfil(res.data);
    //    })}, []);


    function handleError (e) {
        this.onerror=null;this.src={SelecionarFoto}
    }

    return (
        <div>
            <Header />
            {Anuncio.map(Anuncio =>
            <section className="conteiner-loja">
                
                <h1 className="nome-loja col-10">{Anuncio.Titulo}</h1>
                
                <div className="top-loja col-11">
                <h2 className="subnome-loja">{Anuncio.CategoriaNome}</h2>
                    <a href="/cadastroLoja">Editar Loja</a>
                </div>

                
                
                <div className="box-loja">
                    <div className="loja-descricao col-5">
                    
                        <p className="p-descricao">{Anuncio.Descricao}</p>
                    
                    </div>

                    <div className="dados-loja col-5">
                    
                        <div className="loja-cont">
                         
                        <div className="img-perfil-loja">
                            <img width="100px" height="100px" src={'http://localhost:3333/uploads/' + Anuncio.ImagemUsuario}></img>
                        </div >
                           
                            <p className="p-info" >{Anuncio.Nome}</p>
                            <p className="p-info"> {Anuncio.Email}</p>
                                 
                        </div>

                        <div className="loja-cont" >
                            <p className="p-info"><a className="sociais-loja" href="#">{Anuncio.Instagram}</a></p>
                            <p className="p-info"><a className="sociais-loja" href="#">{Anuncio.Facebook}</a></p>
                            <p className="p-info"><a className="sociais-loja" href="#">{Anuncio.Site}</a></p>
                            <p className="p-info">{Anuncio.Telefone}</p>
                        </div>
                    </div>
                </div>

                
                <div className="galeria-loja col-12">
                    <div className="img-1 ">
                        <img key={Anuncio} src={'http://localhost:3333/uploads/' + Anuncio.ImagemAnuncio[0]}
                        width='220' height='200'/>
                    </div>
                    
                    <div className="img-2">
                    <img key={Anuncio} src={'http://localhost:3333/uploads/' + Anuncio.ImagemAnuncio[1]}
                        width='220' height='200'/>
                    </div>

                    <div className="img-3">
                    <img key={Anuncio} src={'http://localhost:3333/uploads/' + Anuncio.ImagemAnuncio[2]}
                        width='220' height='200'/>
                    </div>

                    <div className="img-4">
                    <img key={Anuncio} src={'http://localhost:3333/uploads/' + Anuncio.ImagemAnuncio[3]}
                        width='220' height='200' onerror={handleError}/>
                    </div> 
                </div>
               
            </section>
            )} 
            <Footer />
        </div>

    );
}

export default Loja;