const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

//Backend Routes
const htmlRouter = require('./routes/html-routes.js');
const dogsRouter = require('./routes/client-routes.js');
const apiRouter = require('./routes/api-routes.js');

//Handlebars
const handlebars = require('express-handlebars');


app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main'
}));


// Requiring our models for syncing
const db = require('./models');


// Invoke routes
htmlRouter(app);
clientRouter(app);
apiRouter(app);

// Syncing our sequelize models and then starting our Express app
// GKF once set up make force false
db.sequelize.sync({ force: true }).then(() => {
  app.use(express.static('public/assets'));
  app.use(require('./routes/html-routes'));
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
