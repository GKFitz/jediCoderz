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
