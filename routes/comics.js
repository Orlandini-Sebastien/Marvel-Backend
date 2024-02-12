const express = require("express");
const router = express.Router();
const axios =require ("axios");

const app = express();
app.use(express.json());

router.get("/comics", async(req, res) => {
  try {

    let page = Number(req.query.page);
    const limit =100;
    if(!page){page=0;}
   
    const comic = req.query.comic;

    const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/comics?title=${comic}&skip=${limit*page}&apiKey=${process.env.MARVEL_KEY}`)
    res.json(response.data);
    } catch (error) {
    res.json({error : error.message})
  }
});


router.get("/comics/:characterId", async(req, res) => {
    try {
        const characterId = req.params.characterId
      const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.MARVEL_KEY}`)
      res.json(response.data);
      } catch (error) {
      res.json({error : error.message})
    }
  });



  
  router.get("/comic/:comicId", async(req, res) => {

    try {  

       const comicId = req.params.comicId;
      const response  = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.MARVEL_KEY}`)
      return res.status(201).json(response.data);
      } catch (error) {
      return res.status(400).json({error : error.message})
    }
  });

  

module.exports= router;