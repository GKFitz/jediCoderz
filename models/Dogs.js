module.exports = (sequelize, DataTypes) => {
    
    const Dogs = sequelize.define('Dogs', {
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
                len: [2,20],
            },
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 2,
                max: 35,
            },
            isNumeric: true,
            isInt: true,

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
                min: 1,
                max: 5
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
