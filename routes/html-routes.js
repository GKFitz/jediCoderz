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
    // app.get('/my-account', (req,res) => {
    //     res.render('my-account:Client', {layout: 'main'});
    // });

    //this code goes through the authentication process and sorts whether the user is a 
    //admin or a client. And pulls the appropriate amount of dogs 
   // app.get("/my-account", require('connect-ensure-login').ensureLoggedIn({ redirectTo: "/login"}), (req,res) => {
    //     if (req.user.admin) {
    //         db.Dogs.findAll({}).then(allDogs => {
    //             res.render('my-account', {dogs: allDogs})
    //         })
    //     }else{
    //         db.Accounts.findOne({where: {id: req.user.id}, include: [db.Dogs] })
    //         .then(client => {
    //             res.render('my-account', {client: client, dogs: client.dogs})
    //         })
    //     }
    // }); 

//     app.get('/my-account', require('connect-ensure-login').ensureLoggedIn({ redirectTo: "/login"}), async (req,res) => {
//         let dogs = [];
//         let title = ""
//         if(request.user.admin){
//              dogs = await db.Dogs.findAll({include:[db.Accounts]});
//              title = "My Admin Account"
//         }else{
//         dogs = await db.Dogs.findAll({where : {AccountId : 1}, include : {model : db.Accounts}})
//              title = "My Account";       
//     });
// });

app.get('/my-account', require('connect-ensure-login').ensureLoggedIn({ redirectTo: "/"}), async (req,res) => {
    
    let dogs = [];
    let title = ""
     if(req.user.admin){
         dogs = await db.Dogs.findAll({include:[db.Accounts]});
         title = "My Admin Account"
     } else {
     dogs = await db.Dogs.findAll({where : {AccountId : req.user.id}, include:[db.Accounts]})
         title = "My Account"       
    }
    dogs = dogs.map(dog=>dog.dataValues)

       res.render('admin', {layout: 'main', dogs : dogs, title : title});

});
};