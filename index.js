const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

require('dotenv').config();


app.get("/", (req, res) => {
  res.json({message : "Hi"});
});

const routesComics = require("./routes/comics");
app.use(routesComics);

const routesCaracters = require("./routes/characters");
app.use(routesCaracters);


app.all("*", (req,res)=>{
    res.status(404).json({message: "😞 Not found 😞"});
})

app.listen(process.env.PORT, (req,res)=>{
    console.log("🚀🚀 Server has started 🚀🚀");
  } );