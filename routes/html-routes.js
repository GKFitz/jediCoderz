var path = require("path");
const db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {
    

   
    app.get('/', (req,res) => {
        res.render('index', {layout: 'main'});
    });
    app.get('/login', (req,res) => {
        res.render('login', {layout: 'main'});
    });
    app.get('/team', (req,res) => {
        res.render('team', {layout: 'main'});
    });
    app.get('/story', (req,res) => {
        res.render('story', {layout: 'main'});
    });
    app.get('/faq', (req,res) => {
        res.render('faq', {layout: 'main'});
    });
    app.get('/registration', (req,res) => {
        res.render('registration', {layout: 'main'});
    });
    // app.get('/my-account', (req,res) => {
    //     res.render('my-account:Client', {layout: 'main'});
    // });

    //this code goes through the authentication process and sorts whether the user is a 
    //admin or a client. And pulls the appropriate amount of dogs 
    app.get("/my-account", require('connect-ensure-login').ensureLoggedIn({ redirectTo: "/login"}), (req,res) => {
        if (req.user.admin) {
            db.Dogs.findAll({}).then(allDogs => {
                res.render('my-account', {dogs: allDogs})
            })
        }else{
            db.Accounts.findOne({where: {id: req.user.id}, include: [db.Dogs] })
            .then(client => {
                res.render('my-account', {client: client, dogs: client.dogs})
            })
        }
    });
    
}

