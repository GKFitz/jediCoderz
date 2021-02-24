const { request } = require("http");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // The email cannot be null, and must be a proper email before creation
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
      }
    });
    'password' == request.body.password
    //login 
    //create session
    //logout
    //destroy session
}



