const express = require("express");
const router = express.Router();
const axios =require ("axios");

const app = express();
app.use(express.json());

router.get("/comics", async(req, res) => {
  try {
    const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.KEY}`)
    res.json(response.data.results);
    } catch (error) {
    res.json({error : error.message})
  }
});


router.get("/comic/:characterId", async(req, res) => {
    try {
      const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/comics/characterId?apiKey=${process.env.KEY}`)
      res.json(response.data);
      } catch (error) {
      res.json({error : error.message})
    }
  });

  
  router.get("/comic/:comicId", async(req, res) => {

    try {  

       const comicId = req.params.comicId;
      const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.KEY}`)
      return res.status(201).json(response.data);
      } catch (error) {
      return res.status(400).json({error : error.message})
    }
  });

  

module.exports= router;