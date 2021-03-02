//Authentication
var passport = require("./config/passport");
var session = require("express-session");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Backend Routes
const htmlRouter = require('./routes/html-routes.js');
const clientRouter = require('./routes/client-routes.js');
const apiRouter = require('./routes/api-routes.js');
const seedRouter = require('./routes/seeders-routes.js');
const authRouter = require('./routes/authenticationRoutes.js');

// Requiring our models for syncing
const db = require('./models');
var LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");

//Handlebars
const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: 'main'
}));

var myUrlLogger = (upperCase)=>{
  
  if( typeof uppercase !== 'boolean' ){
    upperCase = true;
  }
  
  return (req,res,next) =>{
   
   console.log('Logging:', (upperCase ? req.url.toUpperCase() : req.url.toLowerCase()));
   
   next();
  }
}
app.use("/css", express.static("public/assets/css"));
app.use("/js", express.static("public/assets/images"));
app.use("/images", express.static("public/assets/js"));

// Set the middleware before your routes
app.use(myUrlLogger(false));
app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// Invoke routes

// [NEW] parse incoming json request
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// [NEW] Fix and implement passport
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
// passport.use(new LocalStrategy(
//   { usernameField: "username", passwordField: "password"},
//   function (username, password, done) {
//     // When a user tries to sign in this code runs
//     db.Accounts.findOne({
//       where: {
//         username: username
//       }
//     }).then(function(accounts) {
//       // If there's no user with the given username
//       if (!accounts) {
//         return done(null, false, {
//           message: "Incorrect Credentials."
//         });
//       }
//       // If there is a user with the given email, but the password the user gives us is incorrect
//       else if (!accounts.validPassword(password)) {
//         return done(null, false, {
//           message: "Incorrect Credentials."
//         });
//       }
//       // If none of the above, return the user
//       return done(null, accounts);
//     }).catch((error)=>done(null, false, {message : "Invalid Credentials"}));
//   }

// ));


// Invoke routes
htmlRouter(app)
clientRouter(app);
apiRouter(app);
seedRouter(app);
authRouter(app);

// Syncing our sequelize models and then starting our Express app
// GKF once set up make force false
db.sequelize.sync({ force: false }).then(() => {
  app.use(express.static('public/assets'));
  app.use(require('./routes/html-routes'));
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
