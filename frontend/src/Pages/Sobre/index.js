import React from 'react';
import ilustrativa from '../../assets/img/Sobre.png';
import QuaseLogo from '../../assets/img/Nome.png';
import '../../assets/css/style.css';

function Sobre() {
    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-forms col-9">
                        <div className="img-ilustrativa">
                            <img src={ilustrativa} />

                        </div>
                        <h1>Nunca tinha ouvido falar da gente?</h1>
                        <p className="txt-sobre">A BFriend é a mais nova forma de movimentar a economia local em seu bairro ou cidade.
                        A nossa missão é aproximar as pessoas e ajuda-las a fazer negócio em um ambiente pós-pandemia.</p>
                        <br></br>
                        <p className="txt-sobre"> Através de um longo processo de pesquisa, descobrimos que vizinhos próximso tem
                        interesses em comum. Sim, isso acontece muito no cotidiano e nem percebemos. As vezes, você atravesa a cidade
                        para levar seu bichinho em um pet shop, sendo que ali do lado da sua casa, tem uma pessoa especial que adora animais,
                        tem um ótimo serviçio e aquele preço que você procura. Então, por que não experimentar? Assim, nopssa rede só cresce
                        dando oportunidades iguais a pessoas que são empreendedoras e guierreiras e que de alguma forma precisam de sua ajuda
                         para manter seus sonhos vivos.</p>


                        <div className="pseudo-footer">
                            <img src={QuaseLogo} />
                            <p className="subtitulo">Aproximando pessoas. Fazendo negócios</p>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
} export default Sobre;