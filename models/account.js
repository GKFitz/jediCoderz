// Datatypes, Sequelize 
// index.js file would hold the general sequelize data but what about for dogs and accounts?
// should belong to a Dog / Admin / - TBD... division b/w accounts table and dogs table

// importing orm to create functions that interact with the DB
const orm = require('../config/orm2.js');

// checked previous examples... seems like HTTPS requests must apply here
const account = {
    // all
    all(x) {
        orm.all('accounts', (res) => x(res));
    },
    // create -> let cols & vals = arrays 
    create(cols, vals, x) {
        orm.create('accounts', cols, vals, (res) => x(res));
    },
    // update
    update(objColValsm, condition, x) {
        orm.update('accounts', objColValsm, condition, (res) => x(res));
    },
    // delete 
    delete(condition, x) {
        orm.delete('accounts', condition, (res) => x(res));
    },
};

// exporting the DB functions 
module.exports = account;
