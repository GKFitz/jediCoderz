//Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const URL = process.env.APP_URL || "http://localhost:8080"


module.exports = app => {


    app.post("/api/login", passport.authenticate("local", { successRedirect: '/my-account', failureRedirect: '/' }), function(req, res) {
        res.json(req.user);
    });
    
   
};
   
    