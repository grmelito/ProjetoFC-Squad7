import React from 'react';
import '../../assets/css/reset.css';
import '../../assets/css/footer.css';
import facebook from '../../assets/img/facebook.png';
import linkedin from '../../assets/img/linkedin.png';
import ig from '../../assets/img/instagram.png';
import yt from '../../assets/img/youtube.png';


function Footer(){
    return (
        <div class="container my-4">
            <div class="row">
                <div class="col-md-4 col-6">
                    <ul class="list-unstyled text-white">
                        <li><a href="#">Dúvidas Frequentes</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                    </ul>
                </div>
                <div class="col-md-4  text-footer text-left">
                    <p>© Bussines Friend Atividades de Internet Ltda. Avenida
                        Paulista, 1046, Bela Vista - 00400-001 -
                        São Paulo, SP</p>
                    <p class=" text-left"><a href="#" class="px-1">Termo de Uso</a> <a href="#">Politicas de
                            pivacidade</a> </p>
                </div>
                <div class="d-flex justify-content-around col-1 py-3 iconesRede">
                    <a href="#"><img src={facebook} alt="facebook"/></a>
                </div>
                <div class="d-flex justify-content-around col-1 py-3 iconesRede">
                    <a href="#"><img src={linkedin} alt=""/></a>
                </div>
                <div class="d-flex justify-content-around col-1 py-3 iconesRede">
                    <a href="#"><img src={ig} alt=""/></a>
                </div>
                <div class="d-flex justify-content-around col-1  py-3 iconesRede">
                    <a href="#"><img src={yt} alt=""/></a>
                </div>
            </div>
        </div>
    );
} 
export default Footer
