const express = require("express");
const router = express.Router();
const axios =require ("axios");


const isAuthenticated = require("../middlewars/isAuthenticated");

router.get("/characters", async(req, res) => {
  try {
  
     let page = Number(req.query.page);
     const limit =100;
     if(!page){page=0;}
    
     const character = req.query.character;
   
    const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/characters?name=${character}&skip=${limit*page}&apiKey=${process.env.MARVEL_KEY}`)
    res.json(response.data.results);
    } catch (error) {
    res.json({error : error.message})
  }
});

router.get("/character/:characterId", isAuthenticated, async(req, res) => {

  const characterId = req.params.characterId ;
   console.log(characterId)
  try {
    const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MARVEL_KEY}`)
    res.json(response.data);
    } catch (error) {
    res.json({error : error.message})
  }
});

module.exports= router;