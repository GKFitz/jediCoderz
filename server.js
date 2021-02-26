const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});
