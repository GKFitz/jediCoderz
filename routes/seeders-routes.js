//checking the exosting accounts
const db = require('../models');
var passport = require("../config/passport.js");

module.exports = (app) => {
    app.get("/A", function(req, res) {
        db.Accounts.create({username: 'gkf', password: '123', admin: true})
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