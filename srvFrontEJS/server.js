const express = require("express");
const app = express();
const port = 25000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const salasDeAula = [
  { id: 1, descricao: "Sala 101", localizacao: "Prédio A", capacidade: 30, removido: false },
  { id: 2, descricao: "Sala 102", localizacao: "Prédio B", capacidade: 25, removido: false },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/manutSalaDeAula", (req, res) => {
  res.render("manutSalaDeAula", { salasDeAula });
});

app.listen(port, () => {
  console.log(`Servidor EJS rodando na porta ${port}`);
});