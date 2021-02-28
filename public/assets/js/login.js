$(document).ready(function() {
    // Getting references to our form and inputs
    //need to coordinate with alain for the HTML classes
    var loginForm = $("./views/login-handlebars");
    var usernameInputClient = $("clientUsername");
    var passwordInputClient = $("clientPassword");
  
    var usernameInputAdmin = $("adminUsername");
    var passwordInputAdmin = $("adminPassword");
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.username || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.username, userData.password);
      usernameInputClient.val("");
      passwordInputAdmin.val("");
    });
  
    // GKF loginUser does a post to our "api/login" route and if successful, redirects us the appropriate account page
    //client or admin
    function loginUser(username, password) {
      $.post("/api/login", {
        username: username,
        password: password
      })
        //.then(function() {
          //window.location.replace("/members");
          // If there's an error, log the error
        //})
        //.catch(function(err) {
          //console.log(err);
        //});
    }
  });
  