// dog table 
const db = require('../models');

module.exports = (app) => {

    //Get route to retrieve SINGLE - findOne - Dog Client Account
    app.get('/api/client/:id', (req, res) => {
        db.Accounts.findOne({
            where: {
                id: req.params.id,
                admin: false,
                
            },
            include: [db.Dogs],
        }).then((dbAccounts) => res.json(dbAccounts));
    });

    // Post enable client to add a dog to their account
    app.post('/api/client', (req, res) => {
        console.log(req.body);
        db.Dogs.create({
            AccountsId: req.body.accountsId,
            client_name: req.body.client_name,
            dog_name: req.body.dog_name,
            breed: req.body.breed,
            age: req.body.age,
            food_requirements: req.body.food_requirements,
            friendliness: req.body.friendliness,
        }).then((dbDogs) => res.json(dbDogs));

    });

    // Put route to update whatever the client inputs, if changes are made on the ADMIN side, the client files are immediately updated
    app.put('/api/client', (req, res) => {
        db.Dogs.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbDogs) => res.json(dbDogs));
    })
    // Delete route needed here or????
};