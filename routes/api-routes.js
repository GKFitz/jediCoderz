//const { query } = require('express');
// accounts table -> require models
const db = require('../models');

var passport = require("../config/passport.js");

// HTTP REQUESTS 
// https://sequelize.org/v3/docs/querying/


module.exports = (app) => {


    app.get('/api/admin', (req, res) => {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Accounts.findAll({
            where: {
                admin: true
            },
          include: [db.Dogs],
        }).then((dbAdmin) => res.json(dbAdmin));
    });
    
    app.get('/api/admin/:id', (req, res) => {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Dogs
        db.Accounts.findOne({
          where: {
            id: req.params.id,
            admin: true
          },
          include: [db.Dogs],
        }).then((dbAccounts) => res.json(dbAccounts));
    });

    app.post('/api/admin', (req, res) => {
        db.Dogs.create(req.body).then((dbAuthor) => res.json(dbAuthor));
    });


    // app.delete('/api/myAdmin-account/:id', (req, res) => {
    //     db.Admin.destroy({
    //       where: {
    //         id: req.params.id,
    //       },
    //     }).then((db) => res.json(dbAuthor));
    //   });
//     // Post route for creating account sign-up for a client
//     app.post('/api/accounts/registration', (req, res) => {
//         console.log(req.body);
//         db.Accounts.create({
//             username: req.body.username,
//             password: req.body.password,
//             admin: req.body.admin,
//         }).then((dbAdminAcc) => res.json(dbAdminAcc));
//     });
    
//     // deleting a dog from the database
//     app.delete('/api/accounts/:id', (req, res) => {
//         db.Accounts.destroy({
//         where: {
//             id:req.params.id
            
//         },
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

};
     
    
    
    
    
    