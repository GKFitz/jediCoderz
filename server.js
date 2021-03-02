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


app.use(session({
  key: 'user_sid',
  secret: 'SECRET_KEY',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));


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

app.use(express.static('public/assets'));
app.use(express.static('public/'));


// Invoke routes
htmlRouter(app)
clientRouter(app);
apiRouter(app);
seedRouter(app);
authRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(() => {
  app.use(require('./routes/html-routes'));
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
