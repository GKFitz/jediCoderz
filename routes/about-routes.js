// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {

  app.get("/about", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/about");
    }
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

};
