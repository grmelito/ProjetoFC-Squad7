create database ProjetoFcamara;

use ProjetoFcamara;

create table Categorias(
IdCategoria int primary key AUTO_INCREMENT,
CategoriaNome varchar(100)
);

create table Estados (
IdEstado int primary key AUTO_INCREMENT,
EstadoNome varchar(50),
Uf char(2)
);

create table Cidades (
IdCidade int primary key AUTO_INCREMENT,
CidadeNome varchar(100),
IdEstado int,
foreign key (IdEstado) references Estados(IdEstado)
);

create table Endereco (
IdEndereco int primary key AUTO_INCREMENT,
Cep varchar(10) unique,
Bairro varchar(200),
Rua varchar(200),
Numero int,
Complemento varchar(20),
IdCidade int,
foreign key (IdCidade) references Cidades(IdCidade)
);

create table TipoUsuario(
IdTipoUsuario int primary key,
NomeTipoUsuario varchar(100)
);

create table Usuario(
IdUsuario int primary key AUTO_INCREMENT,
Nome varchar (100) not null,
Senha varchar(24) not null,
Email varchar(50) unique not null,
DataNascimento date,
Genero varchar(15),
ImagemUsuario varchar(200),
IdTipoUsuario int,
IdEndereco int,
foreign key (IdTipoUsuario) references TipoUsuario(IdTipoUsuario),
foreign key (IdEndereco) references Endereco(IdEndereco)
);

create table Administrador(
IdAdm int primary key AUTO_INCREMENT,
Nome varchar (100) not null,
Email varchar (50) unique not null,
Senha varchar(24) not null,
CPF varchar(11) unique not null,
IdTipoUsuario int,
foreign key (IdTipoUsuario) references TipoUsuario(IdTipoUsuario)
);

create table Fornecedor(
IdFornecedor int primary key AUTO_INCREMENT,
CPFouCNPJ varchar(14),
IdUsuario int,
foreign key (IdUsuario) references Usuario(IdUsuario)
);

create table Anuncio(
IdAnuncio int primary key AUTO_INCREMENT,
Titulo varchar (50),
Descricao text,
ImagemAnuncio varchar(200),
Telefone varchar(15),
Instagram varchar(200),
Facebook varchar(200),
Site varchar(200),
IdCategoria int,
IdFornecedor int,
foreign key (IdCategoria) references Categorias(IdCategoria),
foreign key (IdFornecedor) references Fornecedor(IdFornecedor)
);

create table Comentario(
IdComentario int primary key AUTO_INCREMENT,
Comentario text,
IdAnuncio int,
IdUsuario int,
foreign key (IdAnuncio) references Anuncio(IdAnuncio),
foreign key (IdUsuario) references Fornecedor(IdUsuario)
);

-- drop database ProjetoFcamara


