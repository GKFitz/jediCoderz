const { query } = require('express');
// accounts table -> require models
const db = require('../models');

// HTTP REQUESTS 
// https://sequelize.org/v3/docs/querying/

// Get route for getting all the dog clients 
module.exports = (app) => {
    // GET route for all account posts
    app.get('/api/accounts', (req, res) => {
        // findAll({}) -> for Admin Accounts we want ALL the posts
        // want to add sequelize code to find all account posts & return back to client with res.json
        // will use Account inside the sequelize inside models folder
        db.Account.findAll({
            // Account refers to dogSequelize.js
            include: [db.Account]
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    });

/////// NOTE: WE COULD DO ANOTHER GET ROUTE IF THERES A SPECIFIC ACCOUNT WE WANT TO PULL... AS OF NOW ILL LEAVE ONE GET ROUTE


    // might go inside the dog-routes.. but add it here as well to link it 
    // Get route for returning posts for a single Dog Client in Models Folder..
    app.get('/api/accounts/:petId', (req, res) => {
        db.Account.findOne({
            where: {
                // params takes on the value of id from client
                petId: req.params.petId,
            },
            include: [db.Account],
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    });
    //GKF alternative route if we just sort by username
    app.get('/api/accounts', (req, res) => {
        db.Account.findOne({
            where: {
                // params takes on the value of id from client
                username: req.body.username
            },
            include: [db.Dog],
        }).then((dbAccount) => res.json(dbAccount));
    });
    

    // Post route for creating an account - dog account creation inside dog-routes.js
    app.post('/api/accounts', (req, res) => {
        console.log(req.body);
        db.Account.create({
            admin_id: req.body.admin_id,
            admin_password: req.body.admin_password,
            client_password: req.body.client_password,
            roles: req.body.roles,
            petId: req.body.petId,
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    });
    //GKF
    app.post('/api/accounts', (req, res) => {
        console.log(req.body);
        db.Account.create({
            admin_id: req.body.admin_id,
            admin_password: req.body.admin_password,
            client_password: req.body.client_password,
            roles: req.body.roles,
            petId: req.body.petId,
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    });
    // delete route for deleting clients from admin - should it be by petId... to delete entire client account
    // ***SHOULD ID BE CHANGED TO: petId OR does the use of where {id: query} place the value inside id and i can leave it as it
    //i changed it... it was '/api/accounts/:id' but now its petId, i think this is correct
    // JUST DELETING THE CLIENT DOG NOT THE petId
    app.delete('/api/accounts/:petId', (req, res) => {
        const query = {};
        if(req.query.petId) {
            query.AccountId = req.query.petId;
        }
        // Now this user petId was removed from the database
        db.Account.destroy({
            where: {
                petId: query,
                include: [db.Account]
            },
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    });

    // put route for updating clients in admin
    app.put('/api/accounts', (req, res) => {
        db.Account.update(req.body, {
            where: {
                petId: req.body.petId,
            },
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    })
};

// get findAll() - for category...???? - would go inside the dog-routes.js or both?
