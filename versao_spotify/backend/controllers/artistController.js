// controllers/artistController.js
const { artists } = require("../db.js");

// Função para obter todos os artistas
const getAllArtists = (req, res) => {
  res.json(artists);
};