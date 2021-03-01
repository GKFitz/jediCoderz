// Requiring our models and passport as we've configured it
// var db = require("../models");
// var passport = require("../config/passport");
// const URL = process.env.APP_URL || "http://localhost:3000"

// module.exports = app => {
//     // Using the passport.authenticate middleware with our local strategy.
//     // If the user has valid login credentials, send them to 
//     // Otherwise the user will be sent an error
//     app.post("/api/login", passport.authenticate("local"), function (req, res) {
//         res.json(req.Accounts);
//     });


//     // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//     // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//     // otherwise send back an error
//     // app.post("/api/signup", function (req, res) {
//     //     db.Accounts.create({
//     //         userName: req.body.userName,
//     //         password: req.body.password,
//     //         
//     //     })
//     //         .then(Accounts => {
//     //             res.status(200).json(user);
//     //         })
//     //         .catch(function (err) {
//     //             res.status(401).json(err);
//     //         });
//     // });

//     app.get("/auth/success", (req, res) => {
//         console.log("The user object is ", req.user)
//         if (req.user) {
//             if (Array.isArray(req.accounts)) {
//                 console.log("ARRAY!")
//                 res.json({
//                     success: true,
//                     message: "User has successfully authenticated",
//                     user: {
//                         id: req.user[0].id,
//                         onboard: req.user[0].onboard
//                     },
//                     cookies: req.cookies
//                 });
//             } else {
//                 console.log("OBJECT!")
//                 res.json({
//                     success: true,
//                     message: "User has successfully authenticated",
//                     user: {
//                         id: req.user.id,
//                         onboard: req.user.onboard
//                     },
//                     cookies: req.cookies
//                 });
//             }
//         } else {
//             res.json({
//                 success: false,
//                 message: "No user authenticated"
//             })
//         }
//     });

//     app.get("/api/Accounts/:id", (req, res) => {
//         const id = req.params.id;
//         db.Accounts.findOne({ where: { id: id } })
//             .then(data => res.json(data))
//     })

//     app.put("/api/Accounts/:id", (req, res) => {
//         const id = req.params.id;
//         db.User.update(
//             { onboard: true },
//             { where: { id: id } })
//             .then(updated => res.json(updated))
//     })

   
//     