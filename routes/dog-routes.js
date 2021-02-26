// dog table 
const db = require('../models');

module.exports = (app) => {

    //Get route to retrieve SINGLE - findOne - Dog Client Account
    app.get('/api/client', (req, res) => {
        db.Dogs.findOne({
            where: {
                username: req.params.username
                
            },
            include: [db.Dogs],
        }).then((dbClientAcc) => res.json(dbClientAcc));
    });

    // Post route for dogs accounts 
    app.post('/api/client', (req, res) => {
        console.log(req.body);
        db.Dogs.create({
            // userID: req.user.id, need for the association
            client_dog: req.body.client_dog,
            breed: req.body.breed,
            client_name: req.body.client_name,
            food_requirements: req.body.food_requirements,
            friendliness: req.body.friendliness,
            age: req.body.age,
        }).then((dbClientAcc) => res.json(dbClientAcc));

    });

    // Put route to update whatever the client inputs, if changes are made on the ADMIN side, the client files are immediately updated
    app.put('/api/client', (req, res) => {
        db.Dogs.update(req.body, {
            where: {
                username: req.body.username,
            },
        }).then((dbClientAcc) => res.json(dbClientAcc));
    })
    // Delete route needed here or????
};