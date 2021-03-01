//const { query } = require('express');
// accounts table -> require models
const db = require('../models');

var passport = require("../config/passport.js");

// HTTP REQUESTS 
// https://sequelize.org/v3/docs/querying/

// Get route for getting all the dog clients 
module.exports = (app) => {
    
    //Authentication 
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });


   
    //checking the exosting accounts
    app.get("/A", function(req, res) {
        db.Accounts.create({username: 'test1', password: 'test', admin: true})
        // db.Accounts.create({username: 'test1', password: 'test', admin: false})
        //3 db.Accounts.create({username: 'hello', password: 'test', admin: false})
        // db.Accounts.create({username: 'whyme', password: 'test', admin: true})
        // db.Accounts.create({username: 'who', password: 'test', admin: false})
        // db.Accounts.create({username: 'test1', password: 'test', admin: false})
        // db.Accounts.create({username: 'test1', password: 'test', admin: false})


        db.Dogs.create({
            dog_name: "Juno",
            breed: "Sheltie",
            age: 7,
            food_requirements: "raw",
            friendliness: 5,
            AccountId: 1
        })
        db.Dogs.create({})
        db.Dogs.create({})
        db.Dogs.create({})
        db.Dogs.create({})
        db.Dogs.create({AccountId: 3})
        db.Dogs.create({AccountId: 3}).then(resp =>{
            res.redirect('/')
        })
    })
   

    // app.get('/my-account', async (req,res) => {
    //     console.log(db.Dogs)
    //    db.Dogs.findAll({}).then(result => console.log(result)) 

    // });

    //rout to admin account
    app.get('/api/accounts/admin', (req, res) => {
        // findAll({}) -> for Admin Accounts we want ALL the posts
        // want to add sequelize code to find all account posts & return back to client with res.json
        // will use Account inside the sequelize inside models folder
        db.Accounts.findAll({
            where: {
                admin:true,
            },
            // Account refers to dogSequelize.js
            include: [db.Dogs]
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    });

    //route to client account
    app.get('/api/accounts/client', (req, res) => {
        // findAll({}) -> for Admin Accounts we want ALL the posts
        // want to add sequelize code to find all account posts & return back to client with res.json
        // will use Account inside the sequelize inside models folder
        db.Accounts.findAll({
            where: {
                admin:false,
            },
            // Account refers to dogSequelize.js
            include: [db.Dogs]
        }).then((dbClientAcc) => res.json(dbClientAcc));
    });
    
    // Post route for creating account sign-up - dog account creation inside dog-routes.js
    app.post('/api/accounts/registration', (req, res) => {
        console.log(req.body);
        db.Accounts.create({
            username: req.body.username,
            password: req.body.password,
            admin: req.body.admin,
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    });
    
    // JUST DELETING THE CLIENT DOG NOT THE petId
    app.delete('/api/accounts/:id', (req, res) => {
        db.Accounts.destroy({
        where: {
            id:req.params.id
            
        },
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    });

    // put route for updating clients in admin, if changes to dogs file are made, it will immediately be posted to admin side
    app.put('/api/accounts', (req, res) => {
        db.Account.update(req.body, {
            where: {
                id: req.body.id
            },
        }).then((dbAdminAcc) => res.json(dbAdminAcc));
    })
    
    
    
    
    
    // GET route for all account posts
};   //This to pull ALL client accounts, including all dog information
   


//     



//     // might go inside the dog-routes.. but add it here as well to link it 
//     // Get route for returning posts for a single Dog Client in Models Folder..
//     //GKF alternative route if we just sort by username
//     // This rout grabs ONE client Account via user linked to the dogs table, so it will pull up the dogs associated
//     // app.get('/api/accounts/:username', (req, res) => {
//     //     db.Account.findOne({
//     //         where: {
//     //             // params takes on the value of id from client
//     //             username: req.body.username
//     //         },
//     //         include: [db.Dog],
//     //     }).then((dbAccount) => res.json(dbAccount));
//     // });
    

//     
//     //GKF
//     // delete route for deleting clients from admin - should it be by petId... to delete entire client account
//     // ***SHOULD ID BE CHANGED TO: petId OR does the use of where {id: query} place the value inside id and i can leave it as it
//     //i changed it... it was '/api/accounts/:id' but now its petId, i think this is correct
//     // JUST DELETING THE CLIENT DOG NOT THE petId
//     app.delete('/api/accounts/:id', (req, res) => {
        
//         // Now this user petId was removed from the database
//         db.Accounts.destroy({
//             where: {
//                 id:req.params.id
                
//             },
//         }).then((dbAdminAcc) => res.json(dbAdminAcc));
//     });

//     // put route for updating clients in admin, if changes to dogs file are made, it will immediately be posted to admin side
//     app.put('/api/accounts', (req, res) => {
//         db.Account.update(req.body, {
//             where: {
//                 id: req.body.id
//             },
//         }).then((dbAdminAcc) => res.json(dbAdminAcc));
//     })
// };

// get findAll() - for category...???? - would go inside the dog-routes.js or both?
