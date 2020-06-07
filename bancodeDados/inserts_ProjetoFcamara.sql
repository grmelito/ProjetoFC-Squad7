-- Inserts da tabela Categorias
INSERT INTO Categorias (CategoriaNome) values ('Alimentação');
INSERT INTO Categorias (CategoriaNome) values ('Artesanato');
INSERT INTO Categorias (CategoriaNome) values ('Serviços Domésticos');
INSERT INTO Categorias (CategoriaNome) values ('Moda e Beleza');
-- SELECT * FROM Categorias;

-- Inserts da tabela Estados
INSERT INTO Estados (EstadoNome, Uf) values ('São Paulo', 'SP');
INSERT INTO Estados (EstadoNome, Uf) values ('Rio de Janeiro', 'RJ');
INSERT INTO Estados (EstadoNome, Uf) values ('Minas Gerais', 'MG');
INSERT INTO Estados (EstadoNome, Uf) values ('Santa Catarina', 'SC');
-- SELECT * FROM Estados;

-- Inserts da tabela Cidades
INSERT INTO Cidades (IdEstado, CidadeNome) values (1, 'São Paulo');
INSERT INTO Cidades (IdEstado, CidadeNome) values (1, 'Santos');
INSERT INTO Cidades (IdEstado, CidadeNome) values (2, 'Criciúma');
INSERT INTO Cidades (IdEstado, CidadeNome) values (2, 'Balneário Camboriú');
INSERT INTO Cidades (IdEstado, CidadeNome) values (3, 'Niterói');
INSERT INTO Cidades (IdEstado, CidadeNome) values (3, 'São Gonçalo');
INSERT INTO Cidades (IdEstado, CidadeNome) values (4, 'Criciúma');
INSERT INTO Cidades (IdEstado, CidadeNome) values (4, 'Balneário Camboriú');
-- SELECT * FROM Cidades;
-- SELECT * FROM Cidades where IdEstado = 1;

-- Inserts da tabela Endereco
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('04236-094', 'Cidade Nova Heliópolis', 'Rua 2 de Fevereiro', 379, 1);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('03047-000', 'Brás', 'Rua 21 de Abril', 99, 1);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('11010-091', 'Centro', 'Rua Frei Gaspar', 15, 2);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('11075-671', 'Campo Grande', 'Rua Carlos Gomes', 164, 2);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('24020066', 'Centro', 'Rua Coronel Gomes Machado', 178, 5);
-- SELECT * FROM Endereco;

-- Inserts da tabela TipoUsuario
INSERT INTO TipoUsuario (IdTipoUsuario, NomeTipoUsuario) values (1, 'Consumidor');
INSERT INTO TipoUsuario (IdTipoUsuario, NomeTipoUsuario) values (2, 'Fornecedor');
INSERT INTO TipoUsuario (IdTipoUsuario, NomeTipoUsuario) values (3, 'Administrador');
-- SELECT * FROM TipoUsuario;

-- Inserts da tabela Usuario
INSERT INTO Usuario (Nome, Senha, Email, IdTipoUsuario, IdEndereco) values ('Ana Laura', 'Ana123', 'AnaLaura@gmail.com', 1, 1);
INSERT INTO Usuario (Nome, Senha, Email, IdTipoUsuario, IdEndereco) values ('Carla Dias', 'Carla123', 'CarlaDias@gmail.com', 2, 2);
INSERT INTO Usuario (Nome, Senha, Email, IdTipoUsuario, IdEndereco) values ('Erica Sobral', 'Erica123', 'EricaSobral@gmail.com', 2, 3);
INSERT INTO Usuario (Nome, Senha, Email, IdTipoUsuario, IdEndereco) values ('Gabriel Ruiz', 'Gabriel123', 'GabrielRuiz@gmail.com', 1, 4);
INSERT INTO Usuario (Nome, Senha, Email, IdTipoUsuario, IdEndereco) values ('Marcos Caridade', 'Marcos123', 'MarcosCaridade@gmail.com', 1, 5);
-- SELECT * FROM Usuario;

-- Inserts da tabela Administrador
INSERT INTO Administrador (Nome, Email, Senha, CPF, IdTipoUsuario) values ('Administrator', 'admin@bfriend.com', 'admin123', '32953076687', 3);
-- SELECT * FROM Administrador;

-- Inserts da tabela Fornecedor
INSERT INTO Fornecedor (CPFouCNPJ, IdUsuario) values ('70913274485', 2);
INSERT INTO Fornecedor (CPFouCNPJ, IdUsuario) values ('83346573811', 3);
-- SELECT * FROM Fornecedor;

-- Inserts da tabela Anuncio
INSERT INTO Anuncio (Titulo, Descricao, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Brigadeiro Bom', 'Faço brigadeiros de chocolate artesanal.', 'brigad3ir0', '', 'http://brigadeiroBOM.com.br', 1, 1);
INSERT INTO Anuncio (Titulo, Descricao, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Cristais', 'Vendo cristais energizados.', 'CristalEnergy', 'cristalenergyOficial', 'http://cristalEnergy.com.br', 2, 2);
INSERT INTO Anuncio (Titulo, Descricao, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Pintura Residencial', 'Faço serviços de pintura profissional.', 'PaintPro', 'paintProOficial', 'http://paintpro.com.br', 3, 3);
-- SELECT * FROM Anuncio;

-- Inserts da tabela Comentario