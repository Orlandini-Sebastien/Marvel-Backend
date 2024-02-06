const express = require("express");
const router = express.Router();
const axios =require ("axios");

router.get("/characters", async(req, res) => {
  try {
    const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.KEY}`)
    res.json(response.data.results);
    } catch (error) {
    res.json({error : error.message})
  }
});

router.get("/characters/:characterId", async(req, res) => {
  try {
    const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/character/:characterId?apiKey=${process.env.KEY}`)
    res.json(response.data.results);
    } catch (error) {
    res.json({error : error.message})
  }
});

module.exports= router;