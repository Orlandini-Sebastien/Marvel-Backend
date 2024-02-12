const mongoose = require("mongoose");

const UserMarvel = mongoose.model("UserMarvel", {
  email: String,
  account: {
    username: String,
    favorits: {  
      favorisCharacters: [String],
      favorisComics: [String], }
  },
  token: String,
  hash: String,
  salt: String,
});
  
module.exports = UserMarvel;