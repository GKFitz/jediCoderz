const { request } = require("http");
var bcrypt = require("bcryptjs");


module.exports = function(sequelize, DataTypes) {
    var Accounts = sequelize.define("Accounts", {
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

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Accounts.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Accounts.addHook("beforeCreate", function(accounts) {
    Accounts.password = bcrypt.hashSync(accounts.password, bcrypt.genSaltSync(10), null);
  });
  return Accounts;
};

//'password' == request.body.password
    //login 
    //create session
    //logout
    //destroy session




