require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5002,
  jwtSecret: process.env.JWT_SECRET,
};