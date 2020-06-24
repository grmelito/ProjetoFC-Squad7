import React from 'react';
import '../../assets/css/style.css';
import IconCam from '../../assets/img/camera.svg';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



function Perfil_Usuario() {
    return (
        <div>
            <div className='container-perfil'>
                <div className='box-perfil col-5 col-sl-6'>

                    <div className="up-img-perfil col-12">
                        <input className="imput-img-up" type='file' id="file" onchange="readURL(this);" />
                        <label className="label-up" for="file">
                            <img className='icon-can' src={IconCam} alt="Icone Camera" ></img>
                        </label>
                    </div>

                    <form className="forms-perfil col-12">
                        <div className="input-box-perfil">
                            <input className="form-control" id="inputNome" placeholder="Nome" />
                        </div>

                        <div className="input-box-perfil">
                            <input className="form-control" type="email" id="inputEmail" placeholder="E-mail" />
                        </div>

                        <div className="form-inline-perfil">
                            <Form inline>
                                <FormGroup>
                                    <Input className="imput-data=-perfil"
                                        type="date"
                                        name="date"
                                        id="inputDate"
                                        placeholder="date placeholder"
                                    />
                                </FormGroup>
                                {' '}
                                <FormGroup>
                                    <Input type="select" name="select" id="inputSelect">
                                        <option>Gênero</option>
                                        <option>Feminio</option>
                                        <option>Masculino</option>
                                        <option>Outro</option>
                                    </Input>
                                </FormGroup>
                                {' '}

                            </Form>
                        </div>

                        <div className="input-box-perfil">
                            <input className="form-control col-6" id="inputCep" placeholder="CEP" />
                        </div>

                        <div className="input-box-perfil">
                            <input className="form-control col-12" id="inputCep" placeholder="Endereço" />
                        </div>

                        <div className="form-inline-perfil">
                            <Form inline>
                                <FormGroup>
                                    <Input type="number" name="email" id="endereco-number" placeholder="Número" />
                                </FormGroup>
                                {' '}
                                <FormGroup>
                                    <Input name="password" id="inputComplemento" placeholder="Complemento" />
                                </FormGroup>
                                {' '}
                            </Form>
                        </div>

                        <div className="input-box-perfil">
                            <input className="form-control col-7" id="inputbairro" placeholder="Bairro" />
                        </div>

                        <div className="form-inline-perfil">
                            <Form inline>
                                <FormGroup>
                                    <Input id="endereco-cidade" placeholder="Cidade" />
                                </FormGroup>
                                {' '}
                                <FormGroup>
                                    <Input id="endereco-estado" placeholder="Estado" />
                                </FormGroup>
                                {' '}
                            </Form>
                        </div>

                    </form>

                    <div className="end-perfil">
                        <p className="p-perfil"> Se já tem uma loja? Então clique aqui</p>
                        <div className="p-btn">
                            <button type="submit" className="btn-perfil">Criar Loja</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} export default Perfil_Usuario;
