var passport = require("passport");
//helps authenticate the usernames and passwords, for the differnet accounts
var LocalStrategy = require("passport-local").Strategy;


var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  {
    username: "username"
  },
  
  function (username, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        username: "username"
      }
    }).then(function() {
      // If there's no user with the given username
      if (!accounts) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbAccounts.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbAccounts);
    });
  }


  
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(accounts, cb) {
  cb(null, accounts);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
module.exports = passport;