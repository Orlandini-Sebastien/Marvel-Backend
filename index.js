const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

app.get("/", (req, res) => {
  res.json({message : "Hi"});
});

const routesComics = require("./routes/comics");
app.use(routesComics);

const routesCaracters = require("./routes/characters");
app.use(routesCaracters);

const routesUser = require("./routes/userMarvel");
app.use(routesUser);



app.all("*", (req,res)=>{
    res.status(404).json({message: "😞 Not found 😞"});
})

app.listen(process.env.PORT, (req,res)=>{
  
    console.log("🚀🚀 Server has started ! 🚀🚀");
  } );