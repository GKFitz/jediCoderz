////GKF CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL USING SEQUELIZE
require("dotenv").config();
// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize('dogHouse_db', 'root', process.env.PASS, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Exports the connection for other files to use
module.exports = sequelize;
