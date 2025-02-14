// server.js
const express = require("express");
const cors = require("cors");
const artistRoutes = require("./routes/artistRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

// Usando as rotas de artistas
app.use(artistRoutes);

// Middleware de erro
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
