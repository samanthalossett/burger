// Inside the burgers_controller.js file, import the following:
// Express
var express= require('express'); 
var app = express(); 
var path= require('path'); // need this?
// burger.js
var burger= require("../models/burger");

// Create the router for the app, 
app.get("/", function(req, res){
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
   burger.selectAll(function(data){
     var hdbrsObj = {
       burgers: data
     };
     console.log(hdbrsObj);
     res.render ("index", hdbrsObj);
   });
app.post("/api/burgers", function (req, res){
  burger.insertOne(
    ["burgers_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result){
      res.json({ id: result.insertId});
    }
  );
});

app.put("/api/burgers/:id", function(req,res){
  var condition = "id= " + req.params.id;
  console.log("condition", condition);
  burger.updateOne({ devoured: req.body.devoured}, condition, function(
    result
  ){
    if ((result, changedRows === 0)){
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  });
});
app.deleteOne(condition, function(req, res){
  var condition = "id= " + req.params.id;
  console.log("condition", condition);

  burger.deleteOne(condition, function(result){
    if ((result, changedRows === 0)){
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  })
})
});
  // Start our server so that it can begin listening to client requests.
  // app.listen(PORT, function() {
  //   // Log (server-side) when our server has started
  //   console.log("Server listening on: http://localhost:" + PORT);
  // });

//   and export the router at the end of your file.
module.exports= app;