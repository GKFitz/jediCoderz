//THis is for Accounts=admin

const express = require('express');
const router = express.Router();

// import dog.js from models folder to use the DB functions // Links to the ORM
const Accounts = require('../../../models/Accounts.js');



$.get('/api/dogs').then(dogs => {
// Create routes + logic - GET 
router.get('/my-account', (req, res) => {
    Accounts.all((data) => {
        // handlebars obj
        const hbsObject = {
            accounts: data,
        };
        console.log(hbsObject);
        res.render('admin', hbsObject);
    });
});

// POST / CREATE INSIDE 
router.post('api/accounts', (req, res) => {
    // dogs.js OR should there be another file for accounts.js inside js?
    Accounts.create({
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin,
    }).then((dbPost) => res.json(dbPost));
    
});

// PUT / UPDATE INSIDE - latch onto the usernam? and edit based on ??
// router.put('api/accounts/:id', (req, res) => {
//     Accounts.update(['username', 'password', 'admin'], [req.body.username, req.body.password, req.body.admin], 
//     (result) => {
//         // send the id of admin acc 
//         res.json({id: result.insertId});
//     })
// })

router.put('api/accounts/:id', (req, res) => {
    Accounts.update(req.body, {
        where: {
            id: req.body.id,
        },
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin,
    });
});

// DELETE / APPLY 404 STATUS AND 200 STATUS - what would i be deleting? it would have to be the petId in the case i need to remove a client, or specific info like the age, food reqs, etc from the dog table 
router.delete('api/accounts/:id', (req, res) => {
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