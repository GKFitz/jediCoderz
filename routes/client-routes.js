// dog table 
// const db = require('../models');

module.exports = (app) => {

    //Get route to retrieve SINGLE - findOne - Dog Client Account
    app.get('/api/client/:id', (req, res) => {
        db.Accounts.findOne({
            where: {
                id: req.params.id
                
            },
            include: [db.Dogs],
        }).then((dbClientAcc) => res.json(dbClientAcc));
    });

    // Post route for dogs accounts 
    app.post('/api/client/', (req, res) => {
        console.log(req.body);
        db.Dogs.create({
            AccountsId: req.body.accountsId,
            client_name: req.body.client_name,
            dog_name: req.body.dog_name,
            breed: req.body.breed,
            age: req.body.age,
            food_requirements: req.body.food_requirements,
            friendliness: req.body.friendliness,
        }).then((dbClientAcc) => res.json(dbClientAcc));

    });

    // Put route to update whatever the client inputs, if changes are made on the ADMIN side, the client files are immediately updated
    app.put('/api/client', (req, res) => {
        db.Dogs.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbClientAcc) => res.json(dbClientAcc));
    })
    // Delete route needed here or????
};