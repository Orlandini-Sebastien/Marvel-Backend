const mongoose = require("mongoose");

const FavorisMarvel = mongoose.model("FavorisMarvel", {
    favorisCharacter: [String],
    favorisComics: [String],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserMarvel",
      },
  });
    
  module.exports = FavorisMarvel;