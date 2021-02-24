var passport = require("passport");
//helps authenticate the usernames and passwords, for the differnet accounts
var passportLocal = require("passport-local")

//
function(userName, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        userName: userName
      }
    }).then(function() {
      // If there's no user with the given email
      if (!accounts) {
        return done(null, false, {
          message: "Incorrect userName."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });



module.exports = passport;