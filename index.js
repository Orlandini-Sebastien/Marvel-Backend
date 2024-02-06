const express = require("express");
const app = express();
app.use(express.json());

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