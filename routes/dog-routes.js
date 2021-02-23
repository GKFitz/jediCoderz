// dog table 
const db = require('../models');

module.exports = (app) => {

    //Get route to retrieve single Dog Client Account
    app.get('/api/client/:petId', (req, res) => {
        
    });

    // Post route for dogs accounts 
    app.post('/api/client', (req, res) => {
        console.log(req.body);
        db.Dogs.create({
            client_dog: req.body.client_dog,
            breed: req.body.breed,
            client_name: req.body.client_name,
            food_requirements: req.body.food_requirements,
            friendliness: req.body.friendliness,
            petId: req.body.petId,
            age: req.body.age,
        }).then((dbClientAcc) => res.json(dbClientAcc));
    });

    // Put route to update whatever the client inputs
    app.put('/api/client', (req, res) => {
        db.Dogs.update(req.body, {
            where: {
                petId: req.body.petId,
            },
        }).then((dbClientAcc) => res.json(dbClientAcc));
    })

    // Delete route needed here or????
};