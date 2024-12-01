const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Configurar o middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "email",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados.");
});

// Rota para inserir dados na tabela emails
app.post("/add-email", (req, res) => {
    const { input_email, input_text } = req.body;
  
    const query = "INSERT INTO emails (input_email, input_text) VALUES (?, ?)";
    db.query(query, [input_email, input_text], (err, result) => {
      if (err) {
        console.error("Erro ao inserir dados:", err.message);
        res.status(500).json({ message: "Erro ao inserir dados no banco de dados." });
      } else {
        res.status(200).json({ message: "Dados inseridos com sucesso!" }); // Retorna um JSON válido
      }
    });
  });
  
  // Rota para buscar todos os dados da tabela emails
  app.get("/get-emails", (req, res) => {
    const query = "SELECT * FROM emails";
  
    db.query(query, (err, results) => {
      if (err) {
        console.error("Erro ao buscar dados:", err.message);
        res.status(500).send("Erro ao buscar dados no banco de dados.");
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Iniciar o servidor
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });