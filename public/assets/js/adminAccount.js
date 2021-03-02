$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/admin").then(function(data) {
      $(".whatever gets put in the HTML ").text(data.id);
    });
  });