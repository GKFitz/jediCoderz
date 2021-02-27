const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main'
}));


// Syncing our sequelize models and then starting our Express app
// GKF once set up make force false
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
app.use(express.static('public/assets'));
app.use(require('./routes/html-routes'));

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});
