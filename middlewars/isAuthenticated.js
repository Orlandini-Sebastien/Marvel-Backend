const UserMarvel = require("../models/UserMarvel");

const isAuthenticated = async(req,res,next)=>{
  try {
    console.log(req.headers);
    const userMarvel = await UserMarvel.findOne({
    token: req.headers.authorization.replace("Bearer ", "")
  });
    if (!userMarvel) {
      return res.status(401).json({ error: "Unauthorized ✋" });
    }
    req.userMarvel=userMarvel;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized ✋" });
  }
}

module.exports = isAuthenticated;

