// Datatypes, Sequelize 
// WHERE DOES THE LINK TO THE ORM GO??? FOR BOTH DOG.JS & ACCOUNT.JS?
// index.js file would hold the general sequelize data but what about for dogs and accounts?
// should belong to a Dog / Admin / - TBD... division b/w accounts table and dogs table

const orm = require('../config/orm.js');

// checked previous examples... seems like HTTPS requests must apply here
const dog = {
    // all
    all(x) {
        orm.all('dogs', (res) => x(res));
    },
    // create -> let cols & vals = arrays 
    create(cols, vals, x) {
        orm.create('dogs', cols, vals, (res) => x(res));
    },
    // update
    update(objColValsm, condition, x) {
        orm.update('dogs', objColValsm, condition, (res) => x(res));
    },
    // delete 
    delete(condition, x) {
        orm.delete('dogs', condition, (res) => x(res));
    },
}

module.exports = dog;
