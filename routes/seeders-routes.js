// checking the exosting accounts
const db = require('../models');
var passport = require("../config/passport.js");


module.exports = (app) => {
    
    app.get("/A", function(req, res) {
        db.Accounts.create({username: 'test_admin', password: '123', admin: true})
        db.Accounts.create({username: 'gkf', password: '111', admin: false})
        db.Accounts.create({username: 'jude', password: 'test', admin: false})
        db.Accounts.create({username: 'genis', password: 'test1', admin: false})
        db.Accounts.create({username: 'alain', password: 'test2', admin: false})
        // db.Accounts.create({username: 'test1', password: 'test', admin: false})
        // db.Accounts.create({username: 'test1', password: 'test', admin: false})
    

        db.Dogs.create({
            dog_name: "Juno",
            breed: "Sheltie",
            age: 7,
            food_requirements: "raw",
            friendliness: 5,
            AccountId: 2
        })
        db.Dogs.create({
            dog_name: "Moana",
            breed: "Portuguese Waterdog",
            age: 2,
            food_requirements: "kibble",
            friendliness: 5,
            AccountId: 3,
        })
        db.Dogs.create({
            dog_name: "Snowball",
            breed: "Maltese",
            age: 10,
            food_requirements: "raw",
            friendliness: 4,
            AccountId: 4,
        })
        db.Dogs.create({
            dog_name: "Siber",
            breed: "Husky",
            age: 2,
            food_requirements: "kibble",
            friendliness: 4,
            AccountId: 5,
        }).then(response => {
            db.Accounts.findAll()
            .then(function(dbAccounts){ 
                db.Dogs.findAll()
                .then(function(dbDogs){
                    console.log(dbAccounts)
                    console.log(dbDogs)
                const dataBase = {Accounts: dbAccounts, Dogs: dbDogs}
                res.json(dataBase)
                })
            })
        })
        
        // db.Dogs.create({})
        // db.Dogs.create({})
        // db.Dogs.create({})
        // db.Dogs.create({AccountId: 3})
        // db.Dogs.create({AccountId: 3})
            // res.redirect('/')
    });
    
}

    
    
