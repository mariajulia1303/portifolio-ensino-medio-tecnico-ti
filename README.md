use email;

CREATE TABLE emails ( id INT AUTO_INCREMENT PRIMARY KEY, input_email VARCHAR(255) NOT NULL, input_text VARCHAR(255) NOT NULL );
UTILIZANDO DBEAVER COM MySQL

Tem que ter a pasta node_modules dentro da API, ter o XAMPP aberto com o MySQL e o apache rodando, e executar o node dentro do arquivo server.js com a opção "reveal in file explorer" e apos o nome api escrever cmd. Dentro do cmd iniciar o servidor com o comando npm start e esperar o banco de dados conectar após isso testar a caixa de texto de email e mensagem
