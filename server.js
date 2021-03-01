//Authentication
var passport = require("./config/passport");
var session = require("express-session");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Backend Routes
const htmlRouter = require('./routes/html-routes.js');
const clientRouter = require('./routes/client-routes.js');
const apiRouter = require('./routes/api-routes.js');

// Requiring our models for syncing
const db = require('./models');

//Handlebars
const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: 'main'
}));


// Invoke routes

clientRouter(app);
apiRouter(app);
htmlRouter(app);

// Syncing our sequelize models and then starting our Express app
// GKF once set up make force false
db.sequelize.sync({ force: false }).then(() => {
  app.use(express.static('public/assets'));
  app.use(require('./routes/html-routes'));
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
