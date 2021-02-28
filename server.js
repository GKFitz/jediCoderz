const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

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

app.use(express.static('public/assets'));
app.use(require('./routes/html-routes'));

// Invoke routes
htmlRouter(app);
clientRouter(app);
apiRouter(app);

// Syncing our sequelize models and then starting our Express app
// GKF once set up make force false
db.sequelize.sync({ force: true }).then(() => {

  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
