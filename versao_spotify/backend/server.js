// rotas 
const express = require("express");

const {
  getAllArtists,
  getArtistById,
  addArtist
} = require("../controllers/artistController");

const router = express.Router();

router.get("/artists", getAllArtists);
router.get("/artists/:id", getArtistById);
router.post("/artists", addArtist);

module.exports = router;