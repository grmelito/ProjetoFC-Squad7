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
INSERT INTO Cidades (IdEstado, CidadeNome) values (2, 'Niterói');
INSERT INTO Cidades (IdEstado, CidadeNome) values (2, 'São Gonçalo');
INSERT INTO Cidades (IdEstado, CidadeNome) values (3, 'Uberlândia');
INSERT INTO Cidades (IdEstado, CidadeNome) values (3, 'Uberaba');
INSERT INTO Cidades (IdEstado, CidadeNome) values (4, 'Criciúma');
INSERT INTO Cidades (IdEstado, CidadeNome) values (4, 'Balneário Camboriú');
-- SELECT * FROM Cidades;
-- SELECT * FROM Cidades where IdEstado = 1;

-- Inserts da tabela Endereco
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('04236-094', 'Cidade Nova Heliópolis', 'Rua 2 de Fevereiro', 379, 1);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('03047-000', 'Brás', 'Rua 21 de Abril', 99, 1);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('11010-091', 'Centro', 'Rua Frei Gaspar', 15, 2);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('11075-671', 'Campo Grande', 'Rua Carlos Gomes', 164, 2);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('24020-065', 'Centro', 'Rua Coronel Gomes Machado', 178, 3);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('38400-058', 'Lídice', 'Avenida Rio Branco', 80, 5);
INSERT INTO Endereco (Cep, Bairro, Rua, Numero, IdCidade) values ('88330-033', 'Centro', 'Avenida Atlântica', 5022, 8);
-- SELECT * FROM Endereco;

-- Inserts da tabela TipoUsuario
INSERT INTO TipoUsuario (IdTipoUsuario, NomeTipoUsuario) values (1, 'Consumidor');
INSERT INTO TipoUsuario (IdTipoUsuario, NomeTipoUsuario) values (2, 'Fornecedor');
INSERT INTO TipoUsuario (IdTipoUsuario, NomeTipoUsuario) values (3, 'Administrador');
-- SELECT * FROM TipoUsuario;

-- Inserts da tabela Usuario
INSERT INTO Usuario (Nome, Senha, Email, DataNascimento, Genero, ImagemUsuario, IdTipoUsuario, IdEndereco) values ('Ana Laura', 'Ana123', 'AnaLaura@gmail.com', '2000-10-07', 'F', 'http://localhost:3333/uploads/4fa0d7948e12-Stan.jpg', 1, 1);
INSERT INTO Usuario (Nome, Senha, Email, DataNascimento, Genero, ImagemUsuario, IdTipoUsuario, IdEndereco) values ('Carla Dias', 'Carla123', 'CarlaDias@gmail.com', '1998-05-21', 'F', 'http://localhost:3333/uploads/4fa0d7948e12-Stan.jpg', 2, 2);
INSERT INTO Usuario (Nome, Senha, Email, DataNascimento, Genero, ImagemUsuario, IdTipoUsuario, IdEndereco) values ('Erica Sobral', 'Erica123', 'EricaSobral@gmail.com', '1999-11-13', 'F', 'http://localhost:3333/uploads/4fa0d7948e12-Stan.jpg', 2, 3);
INSERT INTO Usuario (Nome, Senha, Email, DataNascimento, Genero, ImagemUsuario, IdTipoUsuario, IdEndereco) values ('Gabriel Ruiz', 'Gabriel123', 'GabrielRuiz@gmail.com', '1998-09-05', 'M', 'http://localhost:3333/uploads/a3f228c22fad-ryze-icon.png', 2, 4);
INSERT INTO Usuario (Nome, Senha, Email, DataNascimento, Genero, ImagemUsuario, IdTipoUsuario, IdEndereco) values ('Marcos Caridade', 'Marcos123', 'MarcosCaridade@gmail.com', '1994-02-18', 'M', 'http://localhost:3333/uploads/a3f228c22fad-ryze-icon.png', 2, 5);
INSERT INTO Usuario (Nome, Senha, Email, DataNascimento, Genero, ImagemUsuario, IdTipoUsuario, IdEndereco) values ('Ryze', 'Ryze123', 'Ryze@gmail.com', '1991-11-28', 'M', 'http://localhost:3333/uploads/a3f228c22fad-ryze-icon.png', 1, 6);
INSERT INTO Usuario (Nome, Senha, Email, DataNascimento, Genero, ImagemUsuario, IdTipoUsuario, IdEndereco) values ('Stan', 'Stan123', 'stanSP@gmail.com', '1995-06-12', 'M', 'http://localhost:3333/uploads/4fa0d7948e12-Stan.jpg', 2, 7);
-- SELECT * FROM Usuario;

-- Inserts da tabela Administrador
INSERT INTO Administrador (Nome, Email, Senha, CPF, IdTipoUsuario) values ('Administrator', 'admin@bfriend.com', 'admin123', '32953076687', 3);
-- SELECT * FROM Administrador;

-- Inserts da tabela Fornecedor
INSERT INTO Fornecedor (CPFouCNPJ, IdUsuario) values ('70913274485', 2);
INSERT INTO Fornecedor (CPFouCNPJ, IdUsuario) values ('83346573811', 3);
INSERT INTO Fornecedor (CPFouCNPJ, IdUsuario) values ('17463552991', 4);
INSERT INTO Fornecedor (CPFouCNPJ, IdUsuario) values ('49855519713', 5);
INSERT INTO Fornecedor (CPFouCNPJ, IdUsuario) values ('65748223919', 7);
-- SELECT * FROM Fornecedor;

-- Inserts da tabela Anuncio
INSERT INTO Anuncio (Titulo, Descricao, ImagemAnuncio, Telefone, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Brigadeiro Bom', 'Faço brigadeiros de chocolate artesanal.', 'http://localhost:3333/uploads/77eaabba87a1-Clark-Street-Mercantile.jpg', '11997875543', 'brigad3ir0', 'brigad3ir0Oficial', 'http://brigadeiroBOM.com.br', 1, 1);
INSERT INTO Anuncio (Titulo, Descricao, ImagemAnuncio, Telefone, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Cristais', 'Vendo cristais energizados.', 'http://localhost:3333/uploads/77eaabba87a1-Clark-Street-Mercantile.jpg', '11998779981', 'cristalenergy', 'cristalenergyOficial', 'http://cristalEnergy.com.br', 2, 2);
INSERT INTO Anuncio (Titulo, Descricao, ImagemAnuncio, Telefone, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Pintura Residencial', 'Faço serviços de pintura profissional.', 'http://localhost:3333/uploads/77eaabba87a1-Clark-Street-Mercantile.jpg', '139981224315', 'PaintPro', 'paintProOficial', 'http://paintpro.com.br', 3, 3);
INSERT INTO Anuncio (Titulo, Descricao, ImagemAnuncio, Telefone, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Loja do potão', 'Faço potes.', 'http://localhost:3333/uploads/77eaabba87a1-Clark-Street-Mercantile.jpg', '11997521448', 'PotesLoja', 'PotesLojaOficial', 'http://PotesLoja.com.br', 2, 4);
INSERT INTO Anuncio (Titulo, Descricao, ImagemAnuncio, Telefone, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Marmita Paulinho', 'Vendo marmitas para duas pessoas.', 'http://localhost:3333/uploads/77eaabba87a1-Clark-Street-Mercantile.jpg', '13998789122', 'Paulinhomarmita', 'PaulinhomarmitaOficial', 'http://Paulinhomarmita.com.br', 1, 5);
INSERT INTO Anuncio (Titulo, Descricao, ImagemAnuncio, Telefone, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Mr Batata', 'Presto serviços domésticos de marcenaria.', 'http://localhost:3333/uploads/77eaabba87a1-Clark-Street-Mercantile.jpg', '13993811543', 'MRBatata', 'MRBatataOficial', 'http://MRBatata.com.br', 3, 1);
INSERT INTO Anuncio (Titulo, Descricao, ImagemAnuncio, Telefone, Instagram, Facebook, Site, IdCategoria, IdFornecedor) values ('Box do baiano', 'Vendo roupas e acessórios unisex.', 'http://localhost:3333/uploads/77eaabba87a1-Clark-Street-Mercantile.jpg', '11997096327', 'boxBaiano', 'boxBaianoOficial', 'http://boxBaiano.com.br', 4, 2);
-- SELECT * FROM Anuncio;

-- Inserts da tabela Comentario