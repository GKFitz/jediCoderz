// for Sequelize
//const fs = require('fs') ?? const path = require('path'); ??
// const Sequelize = require('sequelize');
// const fs = require('fs');
// const path = require('path');
// //Basename: -> Returns the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.
// const basename = path.basename(module.filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(`${__dirname}/../config/config.js`)[env];
// const db = {};
// let sequelize;

// if(config.use_env_variable) {
//     sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//     sequelize = new Sequelize(
//         config.database,
//         config.username,
//         config.password,
//         config
//     );
// }

// fs.readdirSync(__dirname)
//     .filter((file) => {
//       console.log(file)
//         return (
//             file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//         );
//     }).forEach(file => {
//       console.log(path.join(__dirname, file))
//       const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//       console.log('Model is', model) 
//       db[model.name] = model;
//     });
//     //.forEach((file) => {
//     //   console.log('The file is', file)
//     //   console.log(path.join(__dirname, file))
//     //     const model = require(path.join(__dirname, file));
//     //     console.log('Model is', model) // This is showing a function (anonymous instead of a name like Accounts)
//     //     db[model.name] = model;
//     //});

//     Object.keys(db).forEach((modelName) => {
//       console.log('DB with modelname:', (db[modelName]))
//         if(db[modelName].associate) {
//             db[modelName].associate(db);
//         }
//     });

//     console.log({db})

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;



// module.exports = db;

// const fs = require('fs')
// const path = require('path')
// const Sequelize = require('sequelize')
// const db = {}
// const models = path.join(__dirname, '/models') // correct it to path where your model files are

// const sequelize = new Sequelize(/* your connection settings here */)

// fs
//   .readdirSync(models)
//   .filter(function (file) {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
//   })
//   .forEach(function (file) {
//     var model = sequelize['import'](path.join(models, file))
//     db[model.name] = model
//   })

// Object.keys(db).forEach(function (modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db)
//   }
// })

// db.Sequelize = Sequelize // for accessing static props and functions like Op.or
// db.sequelize = sequelize // for accessing connection props and functions like 'query' or 'transaction'

// module.exports = db

'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;