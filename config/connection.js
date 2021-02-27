const mysql = require('mysql');
require("dotenv").config();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.PASS,
    database:'doghouse_db'
})

connection.connect(function(err){
    if(err) throw err;
    console.log("Success! Connection registered as id: " + connection.threadId);
});

module.exports = connection;
////GKF CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize('dogHouse_db', 'root', 'chocolate1', {
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
