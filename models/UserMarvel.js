const mongoose = require("mongoose");

const UserMarvel = mongoose.model("UserMarvel", {
  email: String,
  account: {
    username: String,
    avatar: Object, 
  },
  newsletter: Boolean,
  token: String,
  hash: String,
  salt: String,
});
  
module.exports = UserMarvel;