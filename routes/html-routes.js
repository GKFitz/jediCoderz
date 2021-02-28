// const db = require("../models");

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
    
    app.get('/my-account', async (req,res) => {
       db.Dogs.findAll()  
        console.log(data);
    });
    // app.post('/admin', function(req, res) {
    //     User.findOne({ username: req.body.username }, function(err, user) {
    //       if (user.admin === true) {
    //         res.render('/admin', {"Login Successfull"});
    //       } else {
    //         if (req.body.password === user.password) {
    //           res.redirect('/client');
    //         } else {
    //           res.render('login.jade', { error: 'Invalid email or password.' });
    //         }
    //       }
    //     });
    //   });

    
}
