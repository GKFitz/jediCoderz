require("dotenv").config();
const mysql2 = require('mysql2');

module.exports = {
    "development": {
      "username": "root",
      "password": process.env.PASS,
      "database": "doghouse_db",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql",
      "dialectModule": mysql2
    },
    "test": {
      "username": "root",
      "password": process.env.PASS,
      "database": "database_test",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": process.env.PASS,
      "database": "database_production",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    }
  }
