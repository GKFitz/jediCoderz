//Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const URL = process.env.APP_URL || "http://localhost:8080"

module.exports = app => {

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
    
    
    
    //Login for existing Accounts both admin and client
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.params.id);
    });
    
    

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    // app.post("/api/signup", function (req, res) {
    //     db.Accounts.create({
    //         username: req.body.username,
    //         password: req.body.password,
            
    //     })
    //         .then(Accounts => {
    //             res.status(200).json(user);
    //         })
    //         .catch(function (err) {
    //             res.status(401).json(err);
    //         });
    // });

    // app.get("/auth/success", (req, res) => {
    //     console.log("The user object is ", req.user)
    //     if (req.user) {
    //         if (Array.isArray(req.accounts)) {
    //             console.log("ARRAY!")
    //             res.json({
    //                 success: true,
    //                 message: "User has successfully authenticated",
    //                 user: {
    //                     id: req.user[0].id,
    //                     onboard: req.user[0].onboard
    //                 },
    //                 cookies: req.cookies
    //             });
    //         } else {
    //             console.log("OBJECT!")
    //             res.json({
    //                 success: true,
    //                 message: "User has successfully authenticated",
    //                 user: {
    //                     id: req.user.id,
    //                     onboard: req.user.onboard
    //                 },
    //                 cookies: req.cookies
    //             });
    //         }
    //     } else {
    //         res.json({
    //             success: false,
    //             message: "No user authenticated"
    //         })
    //     }
    // });

    // app.get("/api/Accounts/:id", (req, res) => {
    //     const id = req.params.id;
    //     db.Accounts.findOne({ where: { id: id } })
    //         .then(data => res.json(data))
    // })

    // app.put("/api/Accounts/:id", (req, res) => {
    //     const id = req.params.id;
    //     db.User.update(
    //         { onboard: true },
    //         { where: { id: id } })
    //         .then(updated => res.json(updated))
    // })
};
   
    