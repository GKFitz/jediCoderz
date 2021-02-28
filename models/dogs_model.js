// Dependencies
// =============================================================
// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references our connection to the DB.
const sequelize = require('../config/connection.js');

const dogRoutes = require("../routes/client-routes");

module.exports = (sequelize, DataTypes) => {
    const Dogs = sequelize.define('Dogs', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isUserName: true
            }
        },
        client_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,15],
            },
        },
        dog_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,15],
            },
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,15],
            },
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [2,35],
            },
            isNumeric: true,
            isInt: true,

        }, 
        age: {
        },
        food_requirements: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,200],
            },
        },
        friendliness: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1,5],
            },
            isNumeric: true,
            isInt: true,
        }, 
        
    });

    Dogs.associate = (models) => {
        // a Dogs must belong inside the Admin Account
        // Dogs cannot be created without a petId (username) 
        Dogs.belongsTo(models.Accounts, {

            foreignKey: {
                allowNull: false,
            },
        });
    };
   
    return Dogs;
};
