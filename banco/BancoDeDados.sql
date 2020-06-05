create database ProjetoFcamara

use ProjetoFcamara

CREATE TABLE Categorias(
IdCategoria int primary key,
CategoriaNome varchar(100)
);

create table Estado (
IdEstado int primary key,
EstadoNome varchar(50)
);

create table Cidade (
IdCidade int primary key,
CidadeNome varchar(100),
foreign key (Estado) references Estado(IdEstado)
);



create table Endereco (
IdEndereco int primary key,
CEP float unique,
Rua varchar(200),
Numero int
);

drop database ProjetoFcamara


