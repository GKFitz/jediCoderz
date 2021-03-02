var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "username" 
  },
  
  function (username, password, done) {
    db.Accounts.findOne({
      where: {
        username: username
      }
    }).then(function(dbaccount) {
      // If there's no user with the given username
      if (!dbaccount) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbaccount.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbaccount);
    });
  }


  
));


passport.serializeUser(function(accounts, cb) {
  cb(null, accounts);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
module.exports = passport;