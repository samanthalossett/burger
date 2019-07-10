// Inside the burgers_controller.js file, import the following:
// Express
var express= require('express'); // need this?
var app = express(); 
var path= require('path'); // need this?
// burger.js
var burgerjs= require("burger");


// Create the router for the app, 

app.get("/", function(req, res){
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM burgers", function(err, result) {
        if (err) throw err;
        // We then begin building out HTML elements for the page.
        var html = "<h1> Burger Menu </h1>";

  // Here we begin an unordered list.
  html += "<ul>";

   // We then use the retrieved records from the database to populate our HTML file.
   for (var i = 0; i < result.length; i++) {
    html += "<li><p> ID: " + result[i].id + "</p>";
    html += "<p>Burger: " + result[i].burger_name + " </p></li>";
  }

  // We close our unordered list.
  html += "</ul>";
 // Finally we send the user the HTML file we dynamically created.
 res.send(html);
});
});
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

//   and export the router at the end of your file.
// module.exports=  **HELP**