import React from 'react';
import '../../assets/css/reset.css';
import '../../assets/css/footer.css';
import facebook from '../../assets/img/facebook.png';
import linkedin from '../../assets/img/linkedin.png';
import ig from '../../assets/img/instagram.png';
import yt from '../../assets/img/youtube.png';
import logoFooter from '../../assets/img/logo_footer.png';


function Footer() {

    return (

        <div className="footer-container">
            <div className="footer">

                <div className="info-footer">

                    <div className="contato-footer">
                        <ul className="">
                            <li><a href="/duvidas">Dúvidas Frequentes</a></li>
                            <li><a href="/contato">Contato</a></li>
                            <li><a href="/sobre">Sobre Nós</a></li>
                        </ul>
                    </div>

                    <div className="text-footer">
                        <p>© Bussines Friend Atividades de Internet Ltda. Avenida
                        Paulista, 1046, Bela Vista - 00400-001 -
                            São Paulo, SP</p>
                        <p className=""><a href="#" className="px-1">Termo de Uso</a>e <a href="#">Politicas de
                            pivacidade</a> </p>
                    </div>

                </div>

                <div className="img-footer">
                    <div className="footer-redes">
                        <div className=" iconesRede">
                            <a href="#"><img src={facebook} alt="facebook" /></a>
                        </div>
                        <div className="iconesRede">
                            <a href="#"><img src={linkedin} alt="" /></a>
                        </div>
                        <div className="iconesRede">
                            <a href="#"><img src={ig} alt="" /></a>
                        </div>
                        <div className=" iconesRede">
                            <a href="#"><img src={yt} alt="" /></a>
                        </div>
                    </div>

                    <div className="logoFooter">
                        <img src={logoFooter} alt="Logo Bfriend" />
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Footer