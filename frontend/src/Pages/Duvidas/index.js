import React from 'react';
import ilustrativa from '../../assets/img/Duvidas.png';
import QuaseLogo from '../../assets/img/Nome.png';
import '../../assets/css/style.css';
import '../../assets/css/reset.css';

function Duvidas() {
    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-forms col-9">
                        <div className="img-ilustrativa">
                            <img src={ilustrativa} />

                        </div>
                        <h1 className="duvidas">Tá com dúvidas? Calma, vamos te ajudar</h1>
                        <div className="perguntas">
                            <h2>Como excluir minha conta?</h2>
                            <br></br>
                            <p className="txt-duvidas"> Para excluir sua conta é bem simples.
                            <br></br>
                            Ente com seu login e senha clique em Perfil.
                            <br></br>
                            Na parte de baixo da tela, você irá encontrar a opção excluir perfil, <br></br> clique nela. 
                            <br></br>
                            Insira sua senha, confirme e pronto sua conta estará excluida.</p>
                        </div>
                        <div className="perguntas">
                            <h2>Como alterar o CPF/CNPJ cadastrado?</h2>
                            <br></br>
                            <p className="txt-duvidas"> Entre com seu login e senha. 
                            <br></br>
                            Vá na parte superior da tela e clique em cadastro. 
                            <br></br>
                            Ao lado da foto na parte de cima a direita tem um botão 
                            <br></br>
                            chamado Editar, você clica nele. 
                            <br></br>
                            Vai ser direcionado aos seu dados de cadastro.
                            <br></br>
                            Você pode mudar seu CPF/CNPJ e logo após confirmar a alteração.</p>
                        </div>
                        <div className="perguntas">
                            <h2>Quero alterar meu email.</h2>
                            <br></br>
                            <p className="txt-duvidas"> Entre com seu login e senha. 
                            <br></br>
                            Vá na parte superior da tela e clique em cadastro. 
                            <br></br>
                            Ao lado da foto na parte de cima a direita tem um botão 
                            <br></br>
                             chamado Editar,
                            <br></br> 
                            você clica nele. 
                            <br></br>
                            Vai ser direcionado aos seu dados de cadastro.
                            <br></br>
                            Você pode mudar seu CPF/CNPJ e logo após confirmar a 
                            
                            alteração.</p>
                        </div>
                        <div className="perguntas">
                            <h2>Problemas com Login e Senha.</h2>
                            <br></br>
                            <p className="txt-duvidas">
                            Não consegue mais acessar a sua conta? perdeu a senha?
                            <br></br>
                            Click em modificar senha e mandaremos um e-mail para os seu con-<br></br>tato. 
                            <br></br>
                            Assim você poderá redefinir sua senha e voltar a usar nossa plata-
                            <br></br>
                            forma.
                            </p>
                        </div>
                        <div className="perguntas">
                            <h2>Como criar um anúncio?</h2>
                            <br></br>
                            <p className="txt-duvidas">
                            Simples. Você faz seu login e no banner de abertura tem um botão 
                            <br></br>
                             criar sua loja. 
                            Preencha os dados do seu perfil com foto, vá para cri-
                            <br></br>
                             ar loja. 
                            Coloque o titulo, descrição, contatos e fotos. Pronto é só con-
                            <br></br>
                            firmar                          
                            </p>
                        </div>
                        <div className="perguntas">
                            <h2>Posso ter um perfil e não ter um anúncio?</h2>
                            <br></br>
                            <p className="txt-duvidas">
                            Sim. Você coloca seus dados básicos e assim você é dos nosso 
                            <br></br>
                            usuários. Quando                             
                            você quiser pode ter sua lojinha com tudo que tem 
                            <br></br>
                            direito. 
                            Dai pode além de achar o que precisa, vender seu serviço.
                            </p>
                        </div>
                        <div className="perguntas">
                            <h2>É obrigatório colocar preço?</h2>
                            <br></br>
                            <p className="txt-duvidas">
                            Não. Você pode deixar o campo PREÇO como "Negociável". 
                            Dessa <br></br>forma você pode negociar diretamente com o seu cliente o preço final <br></br>do seu 
                            serviço, afinal é você que sabe quanto vale seu trabalho.
                            </p>
                        </div>
                        <div className="perguntas">
                            <h2>A BFriend pode interferir em um anúncio?</h2>
                            <br></br>
                            <p className="txt-duvidas">
                            Sim, se ferir alguma das nossa politicas de segurança, respeito <br></br> e privacidade. 
                            Você pode ter não somente seu anúncio como sua conta <br></br>banida por  tempo indeterminado.
                            </p>
                        </div>
                        <div className="perguntas">
                            <h2>Quais tipos de anúncios são proibidos?</h2>
                            <br></br>
                            <p className="txt-duvidas">
                            Temos uma politica bem clara quando a isso. 
                            Pornografia, venda de <br></br> animais,  violência, armas entre outros são extremamente proibidos e <br></br> quais quer anúncios que violem nossos
                            termos de adesão serão bloque-<br></br>ados e banidos de nossa comunidade.
                            </p>
                        </div>
                        <div className="perguntas">
                            <h2>Como denunciar um anúncio ou perfil abusivo?</h2>
                            <br></br>
                            <p className="txt-duvidas">
                            Você pode usar qualquer um de nossos canais nas mídias sociais ou <br></br>clicar no 
                            link contato e mandar um E-mail com o titulo DENÚNCIA,
                            <br></br> dai iremos tomar as devidas providencias em no máximo 24 horas.
                            </p>
                        </div>



                        <div className="pseudo-footer">
                            <img src={QuaseLogo} />
                            <p className="subtitulo">Aproximando pessoas. Fazendo negócios</p>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
} export default Duvidas;