const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewars/isAuthenticated");
const UserMarvel = require( "../models/UserMarvel");

router.post("/favoris", isAuthenticated , async(req,res)=>{
      try{
      res.status(201).json({message : "ok"});
      } catch (error) {
        res.status(500).json({message : error.message});
      }
  });

  module.exports= router;