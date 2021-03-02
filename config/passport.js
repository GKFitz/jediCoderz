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
    }).then(function(account) {
      if (!account) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      else if (!account.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, account);
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