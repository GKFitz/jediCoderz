const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main'
}));

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index', {layout: 'main'});
});

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});
