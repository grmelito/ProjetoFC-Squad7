create database ProjetoFcamara

use ProjetoFcamara

create table Categorias(
IdCategoria int primary key,
CategoriaNome varchar(100)
);

create table Estados (
IdEstado int primary key,
EstadoNome varchar(50)
);

create table Cidades (
IdCidade int primary key,
CidadeNome varchar(100),
IdEstado int,
foreign key (IdEstado) references Estados(IdEstado)
);



create table Endereco (
IdEndereco int primary key,
Cep varchar(8) unique,
Bairro varchar(200),
Rua varchar(200),
Numero int,
IdCidade int,
foreign key (IdCidade) references Cidades(IdCidade)
);

create table TipoUsuario(
IdTipoUsuario int primary key,
NomeTipoUsuario varchar(100)
);

create table Usuario(
IdUsuario int primary key,
Nome varchar (100) not null,
Senha varchar(24) not null,
Email varchar(50) unique not null,
IdTipoUsuario int,
IdEndereco int not null,
foreign key (IdTipoUsuario) references TipoUsuario(IdTipoUsuario),
foreign key (IdEndereco) references Endereco(IdEndereco)
);

create table Administrador(
IdAdm int primary key,
Nome varchar (100) not null,
Email varchar (50) unique not null,
Senha varchar(24) not null,
CPF varchar(11) unique not null,
IdTipoUsuario int,
foreign key (IdTipoUsuario) references TipoUsuario(IdTipoUsuario)
);

create table Fornecedor(
IdFornecedor int primary key,
CPFouCNPJ varchar(14),
IdUsuario int,
foreign key (IdUsuario) references Usuario(IdUsuario)
);

create table Anuncio(
IdAnuncio int primary key,
Titulo varchar (50),
Descricao text,
Instagram varchar(200),
Facebook varchar(200),
Site varchar(200),
IdCategoria int,
IdFornecedor int,
foreign key (IdCategoria) references Categorias(IdCategoria),
foreign key (IdFornecedor) references Fornecedor(IdFornecedor)
);

create table Comentario(
IdComentario int primary key,
Comentario text,
IdAnuncio int,
IdUsuario int,
foreign key (IdAnuncio) references Anuncio(IdAnuncio),
foreign key (IdUsuario) references Fornecedor(IdUsuario)
);

drop database ProjetoFcamara


