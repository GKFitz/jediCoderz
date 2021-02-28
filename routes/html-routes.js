const db = require("../config/connection");

function routes(app) {
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
       db.query("select * from dogs", function(err, data) {
           res.render('admin', {layout: 'main', dogs: data});
       });
        // console.log(data);
       
    });
    
}


module.exports = routes;
