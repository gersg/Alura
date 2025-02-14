// controllers/artistController.js
const { artists } = require("../db.js");

// Função para obter todos os artistas
const getAllArtists = (req, res) => {
  res.json(artists);
};

// Função para obter um artista pelo id
const getArtistById = (req, res) => {
    const artist = artists.find(a => a.id === parseInt(req.params.id));
    if (artist) {
      res.json(artist);
    } else {
      res.status(404).json({ message: "Artista não encontrado" });
    }
  };