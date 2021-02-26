const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main'
}));

app.use(express.static('public/assets'));
app.use(require('./routes/html-routes'))

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});
