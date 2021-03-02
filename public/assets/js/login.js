console.log("yo")
$(document).ready(function() {
    // Getting references to our form and inputs
    //need to coordinate with alain for the HTML classes
    var loginForm = $("#login");
    var username = $("#username");
    var password = $("#password");
  
    // var usernameInputAdmin = $("adminUsername");
    // var passwordInputAdmin = $("adminPassword");
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      console.log("submit")
      event.preventDefault();
      var userData = {
        username: username.val().trim(),
        password: password.val().trim()
      };
  
      if (!userData.username || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.username, userData.password);
      username.val("");
      password.val("");
    });
  
    // GKF loginUser does a post to our "api/login" route and if successful, redirects us the appropriate account page
    //client or admin
    function loginUser(username, password) {
      $.post("/api/login", {
        username: username,
        password: password
      })
        .then(function(account) {
          window.location.replace("/my-account");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    $.get('/api/dogs').then(dogs => {
      //Display all dogs using javascript
      dog.forEach(dog => {
       const li = document.createElement('li')
        li.innerText = dog.name

        const div = document.createElement('div')
        div.append(li)
        container.append(div)
      })
    })
  });
  