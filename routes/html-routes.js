var path = require("path");
const db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {
    

   
    app.get('/', (req,res) => {
        res.render('index', {layout: 'main'});
    });
    app.get('/login', (req,res) => {
        // [New] Logout the user
        req.logOut()
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
 
    app.get('/create', require('connect-ensure-login').ensureLoggedIn({ redirectTo: "/"}), (req,res) => {
        res.render('dogformcreate', {layout: 'main', title : 'Add Dog',adminId:req.user.id, dog_name:' ', breed:'', age : '', friendliness:'', food_requirements : ''});
    });

    app.get('/update/:id', async (req,res) => {
        const dog = await db.Dogs.findOne({where :{id : req.params.id}});
        console.log(dog);
        res.render('dogform', {layout: 'main', title : 'Update', id : req.params.id, dog_name:dog.dataValues.dog_name.replace('/',''), breed:dog.dataValues.breed, age : dog.dataValues.age, friendliness:dog.dataValues.friendliness, food_requirements : dog.dataValues.food_requirements });
    });
 

app.get('/my-account', require('connect-ensure-login').ensureLoggedIn({ redirectTo: "/"}), async (req,res) => {
    
    let dogs = [];
    let title = ""
    console.log(req.user.admin)
    console.log(req.user.id)
     if(req.user.admin){
         console.log("Is there a req.user.admin?")
         dogs = await db.Dogs.findAll({include:[db.Accounts]});
         title = "My Admin Account"
     } else {
        console.log(req.user.id)
        console.log("Is this being hit?")
     dogs = await db.Dogs.findAll({where : {AccountId : req.user.id}, include:[db.Accounts]})
         title = "My Account"  
         console.log("So the dogs are:", dogs)     
    }

    dogs = dogs.map(dog=>dog.dataValues)
        console.log("dogs:", dogs)
       res.render('admin', {layout: 'main', dogs : dogs, title : title});

});
};