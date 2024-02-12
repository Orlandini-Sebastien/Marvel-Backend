const express = require("express");
const router = express.Router();


const isAuthenticated = require("../middlewars/isAuthenticated");
const UserMarvel = require( "../models/UserMarvel");

router.post("/favoris/save", isAuthenticated , async(req,res)=>{
    try {
      const { favorisCharacters , favorisComics} = req.body;

      const userMarvel = await UserMarvel.findOne({
        token: req.headers.authorization.replace("Bearer ", "")
      });
      
      // modify the fatovite
      const newFavoris = new FavorisMarvel({
        favorisCharacter: favorisCharacters,
        favorisComics: favorisComics,
        owner: req.userMarvel
      });
      await newFavoris.save();
  
      //Show the Favoris
      res.status(201).json(newFavoris);
      } catch (error) {
        res.status(500).json({message : error.message});
      }
  });

  module.exports= router;