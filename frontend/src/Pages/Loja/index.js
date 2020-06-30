import React, { useState } from 'react';
import '../../assets/css/reset.css';
import '../../assets/css/style.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

function Loja() {
    return (
        <div>
            <Header />
            <section className="conteiner-loja">
                <h1 className="nome-loja col-10">Dr. Faz Tudo</h1>
                <div className="top-loja col-11">
                    <h2 className="subnome-loja"> Reparos Domésticos</h2>
                    <a href="/cadastroLoja">Editar Loja</a>
                </div>
                <div className="galeria-loja col-12">
                    <div className="img-1 ">

                    </div>

                    <div className="img-2">

                    </div>

                    <div className="img-3">

                    </div>

                    <div className="img-4">

                    </div>
                </div>

                <div className="box-loja">
                    <div className="loja-descricao col-5">
                        <p className="p-descricao">
                            O nosso lar tá sempre precisando de pequenos reparos. Pia, torneira, banheiro, móveis e elétrica. No dia a dia a gente nunca tem tempo para fazer essas pequenas tarefas e isso pode ser um problema. Imagine se você vai tomar banho e o chuveiro não sai água? Não espere mais. Fazemos todos esses serviços com o melhor preço do bairro. Atendimento e orçamento no mesmo dia.
                            </p>
                        <p className="p-descricao">Temos mais de 10 anos de trabalho prestados no nosso bairro, atendemos condominios e residencias sempre com boas recomendações. Entre em contato agora com por telefone ou e-mail é simples e rapidamente estaremos em sua residencia para fazer seu orçamento. E o melhor é tudo por nossa conta você só paga se aceitar orçamento.
                        </p>
                    </div>
                    <div className="dados-loja col-5">
                        <div className="img-perfil-loja">

                        </div >
                        <div className="loja-cont" >
                            <p className="p-info" >Herbert Thomas Cardoso</p>
                            <div className="loja-info">
                                <p className="p-info"> (13) 99177-4482 </p>
                            </div>

                            <div className="loja-info">
                                <p className="p-info"> herbertthomasgja@gmail.com  </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
}

export default Loja;