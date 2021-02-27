// i think this needs to be renamed - dogController.js or something similar 
// routes must be in their own folder - IF we need routes...
// information comes from DB for the dogsController - dog table - UPDATES THE DOG DB TABLE 
// might need another controller for the accounts table 

const express = require('express');
const router = express.Router();

// import dog.js from models folder to use the DB functions // Links to the ORM
const Dogs = require('../models/dog.js');
const dogs_model = require('../models/dogs_model.js');

// GET - Create routes + logic -  
router.get('/api/dogs/:id', (req, res) => {
    Dogs.all((data) => {
        // handlebars obj
        const hbsObject = {
            accounts: data,
        };
        console.log(hbsObject);
        res.render('client', hbsObject);
    });
});

// POST / CREATE INSIDE 
router.post('api/accounts', (req, res) => {
    // dogs.js OR should there be another file for accounts.js inside js?
    Dogs.create({
        client_name: req.body.client_name,
        dog_name: req.body.dog_name,
        breed: req.body.breed,
        age: req.body.age,
        food_requirements: req.body.food_requirements,
        friendliness: req.body.friendliness,
    }).then((dbPost) => res.json(dbPost));
    
});

// PUT / UPDATE INSIDE 
router.put('api/dogs/:id', (req, res) => {
    Dogs.update(req.body, {
        where: {
            id: req.body.id,
        },
        client_name: req.body.client_name,
        dog_name: req.body.dog_name,
        breed: req.body.breed,
        age: req.body.age,
        food_requirements: req.body.food_requirements,
        friendliness: req.body.friendliness,
    });
});

// api/accounts/type of acc

// DELETE / APPLY 404 STATUS AND 200 STATUS 
router.delete('api/dogs/:id', (req, res) => {
    // sequelize code to delete id 
    db.Post.destroy({
        where: {
            id: req.params.id,
        }
    });
    if(result.affectedRows === 0) {
        return res.status(404).end();
      }
    res.status(200).end();
});


module.exports = router;