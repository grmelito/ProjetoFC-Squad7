import React, { useEffect, useState }  from 'react';
import SelecionarFoto from "../../assets/img/AdicionarFoto.png";
import api from '../../services/api';


function PerfilUsuario() {
   
    const token = localStorage.getItem('token')
   
    const [Perfil, setPerfil] = useState([])
    const [selectedFile, setSelectedFile] = useState();
    const [Nome, setNome] = useState('')
    const [Genero, setGenero] = useState('')
    const [Cep, setCep] = useState('')
    const [Rua, setRua] = useState('')
    const [Numero, setNumero] = useState('')
    const [Complemento, setComplemento] = useState('')
    const [Bairro, setBairro] = useState('')

    useEffect(() => {
     const res = api.get('profile', {
        headers: {
            'auth-token': token 
        },
    }) .then(res => {
        setPerfil(res.data);
    })}, []);
    
    const handleUploadFile = event => setSelectedFile(event.target.files[0])

    async function handleUpdateImage(event) {
        event.preventDefault()

        try {    
            const image = new FormData();
            
            image.append('file', selectedFile) 
            await api.put('update/profile/image', image, {
                headers: {
                    'auth-token': token,   
                },
            }).then( res => {
                alert('Upload deu certo!')
            })
        } catch(err) {
            alert('Erro no upload!')
        }                 
    }

    async function handleUpdateProfile(event) {
        event.preventDefault()

        const data = { Nome, Genero, Cep, 
            Rua, Numero, Complemento, Bairro } 

        try {
            await api.put('update/profile', data, {
                headers: {
                    'auth-token': token,
                },
            }).then(res => {
                alert('Informações Atualizadas!')
            })
        } catch(err) {
            alert('Erro ao atualizar informações!')
        }
        
    }
    
    return (
        <div>
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-loja col-9">
                        <div className="foto-usuario">
                        {Perfil.map(Perfil =>
                            <img src={'http://localhost:3333/uploads/' + Perfil.ImagemUsuario} 
                            className="rounded-circle" width='220' height='200'></img>
                        )}
                        </div>
                        <form encType="multipart/form-data" method='put'>
                        <div className="botao-cadastro">
                            <input className="files" type="file" id="profileImage" onChange={handleUploadFile}></input>
                            <button type="submit" className="btn" onClick={handleUpdateImage}>Alterar Dados</button>
                        </div>
                        </form>
                        <form onSubmit={handleUpdateProfile}>
                            {Perfil.map(Perfil => 
                            <div className="form-div">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputNome">Nome Completo</label>
                                    <input className="form-control" id="inputEmail4" placeholder={Perfil.Nome} 
                                     value={Nome} onChange={e => setNome(e.target.value)} required>
                                    </input>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="E-mail" 
                                    value={Perfil.Email} disabled/>
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputData">Data de Nascimento</label>
                                    <input type="date" className="form-control" id="inputData" 
                                    defaultValue={Perfil.DataNascimento}/>
                                </div>
                                <div className="form-group col-md-7">
                                    <label htmlFor="inputGenero">Gênero</label>
                                    <input type="text" className="form-control" id="inputGenero" placeholder={Perfil.Genero}
                                    value={Genero} onChange={e => setGenero(e.target.value)} required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCPF">CPF</label>
                                    <input type="text" className="form-control" placeholder="123.456.789-01" id="inputCPF" 
                                    defaultValue={Perfil.CPFouCNPF} disabled/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCEP">CEP</label>
                                    <input type="text" className="form-control" id="inputCep" placeholder={Perfil.Cep}
                                    value={Cep} onChange={e => setCep(e.target.value)} required/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEnderco">Endereço</label>
                                    <input type="text" className="form-control" id="inputEndereco" placeholder={Perfil.Rua}
                                    value={Rua} onChange={e => setRua(e.target.value)} required/>
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputNumero">Número</label>
                                    <input type="text" className="form-control" id="inputNumero" placeholder={Perfil.Numero}
                                    value={Numero} onChange={e => setNumero(e.target.value)} required/>
                                </div>
                                <div className="form-group col-md-7">
                                    <label htmlFor="inputComplemento">Complemento</label>
                                    <input type="text" className="form-control" id="inputComplemento" placeholder={Perfil.Complemento}
                                    value={Complemento} onChange={e => setComplemento(e.target.value)} required/>
                                </div>
                                <div className="form-group col-md-10">
                                    <label htmlFor="inputPassword">Bairro</label>
                                    <input type="text" className="form-control" id="inputBairro" placeholder={Perfil.Bairro} 
                                    value={Bairro} onChange={e => setBairro(e.target.value)} required/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputData">Estado</label>
                                    <input type="text" className="form-control" id="inputNumero" 
                                    value={Perfil.EstadoNome} />
                                </div>
                                <div className="form-group col-md-9">
                                    <label htmlFor="inputPassword">Cidade</label>
                                    <input type="text" className="form-control" id="inputComplemento" 
                                    defaultValue={Perfil.CidadeNome} />
                                </div>
                                <div className="botao-cadastro">
                                    <button type="submit" className="btn ">Atualizar Informações</button>
                                </div>
                            </div>
                            )}
                        </form>
                        <hr></hr>
                        <div className="mini-footer">
                            <p className="subtitulo">Revise seus dados Antes de Confirmar</p>
                        </div>

                    </div>
                    <p>Ao se cadastrar você concorda com os <a className="redirect">Termos de Uso  </a> e a <a className="redirect">Política de Privacidade</a> de BFriend.</p>
                </div>
            </div>
        </div>
    )
} export default PerfilUsuario