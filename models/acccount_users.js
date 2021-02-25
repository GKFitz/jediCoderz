const { request } = require("http");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // The username cannot be null, and must be a proper username before creation
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isUserName: true
        }
      },
      // The password cannot be null
      passwords: {
        type: DataTypes.STRING,
        allowNull: false
      },
      //this true or false 
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    });
    //
    Account.associate = (models) => {
    //Associate Account with Dog
      // When Account is deleted its also deleted inside Dog
      Account.hasMany(models.Dog, {
          onDelete: 'cascade'
      });
  };
  return Account;
    //'password' == request.body.password
    //login 
    //create session
    //logout
    //destroy session
}



