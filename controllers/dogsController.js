// i think this needs to be renamed - dogController.js or something similar 
// routes must be in their own folder - IF we need routes...
// information comes from DB for the dogsController - dog table 
// might need another controller for the accounts table 
//HTTPS METHODS GO INSIDE THE PUBLIC JS FOLDER: GET, POST, PUT, DELETE
// CRUD - CREATE, READ, UPDATE, DELETE - GOES INSIDE JS FOLDER

const express = require('express');
const router = express.Router();

// import dog.js from models folder to use the DB functions // Links to the ORM
const dog = require('../models/dog.js');

// Create routes + logic - GET 

// PUT / UPDATE INSIDE 

// DELETE / APPLY 404 STATUS AND 200 STATUS 

module.exports = router;