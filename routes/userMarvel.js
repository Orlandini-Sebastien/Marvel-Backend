const express = require("express");
const router = express.Router();
const UserMarvel = require( "../models/UserMarvel");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");


router.post("/userMarvel/signup", async(req,res)=>{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const favorite_Characters = req.body.favorite_Characters;
        const favorite_Comics = req.body.favorite_Comics;

        const salt = uid2(16);
        const hash = SHA256(password + salt).toString(encBase64);
        const token = uid2(16);

        const emailAlreadyExist = await UserMarvel.find({email : req.body.email});
        if(emailAlreadyExist[0] !== undefined){
            return res.status(400).json({message : "Email already exist"});
        }

        const newUser = new UserMarvel( {
            email: email,
            account: {
                username: username,
                favorits: {  
                  favorisCharacters: favorite_Characters,
                  favorisComics: favorite_Comics, }
              },
            token: token,
            hash: hash,
            salt: salt,
          });

        await newUser.save();
        
        res.status(200).json({
            "_id":newUser._id,
            "token" : newUser.token,
            "account" : newUser.account
        
        });
    } catch (error) {
        res.status(500).json({message : error.message});
    }
});     


router.post("/userMarvel/login", async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const favorite_Characters = req.body.favorite_Characters;
        const favorite_Comics = req.body.favorite_Comics;

        const user = await UserMarvel.findOne({email : email});
        if(!user){
            return res.status(401).json({message : "Email dosn't exist"});
        }

        // Add a function witch add favorites checked to favorites in database 

        const salt = user.salt;
        const hash = SHA256(password + salt).toString(encBase64);
        if(hash === user.hash){

          
           res.status(200).json({
            "_id" : user._id,
            "token": user.token,
            "account" : user.account
            }); 
        } else {
            res.status(401).json({message : "Password do not match"})
        }
    } catch (error) {
        res.status(500).json({message : error.message});
    }
});

module.exports= router;