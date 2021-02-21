// i think this needs to be renamed - dogController.js or something similar 
// routes must be in their own folder - IF we need routes...
// information comes from DB for the dogsController - dog table 
// might need another controller for the accounts table 
//HTTPS METHODS GO INSIDE THE PUBLIC JS FOLDER: GET, POST, PUT, DELETE
// CRUD - CREATE, READ, UPDATE, DELETE - GOES INSIDE JS FOLDER

const express = require('express');
const router = express.Router();

// import dog.js from models folder to use the DB functions // Links to the ORM
const account = require('../models/account.js');

// Create routes + logic - GET 
router.get('/', (req, res) => {
    account.all((data) => {
        // handlebars obj
        const hbsObject = {
            accounts: data,
        };
        console.log(hbsObject);
        // 'index' can be named anything..
        res.render('index', hbsObject);
    });
});

// POST / CREATE INSIDE 
router.post('api/accounts', (req, res) => {
    // dogs.js OR should there be another file for accounts.js inside js?
    account.create(['admin_id', 'admin_password', 'client_password', 'roles', 'petId'], [req.body.admin_id, req.body.admin_password, req.body.client_password, req.body.roles, req.body.petId], (result) => {
        // send back the ID of admin account
        res.json({id: result.insertId});
    });
});

// PUT / UPDATE INSIDE - latch onto the petId? and edit based on ??
router.put('api/accounts:id', (req, res) => {

})

// DELETE / APPLY 404 STATUS AND 200 STATUS - what would i be deleting? it would have to be the petId in the case i need to remove a client, or specific info like the age, food reqs, etc from the dog table 
router.delete('api/accounts/:id', (req, res) => {

})

module.exports = router;