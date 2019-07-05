// This file listens for the HTML calls

// Dependencies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parcing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// A default, catch-all route that leads to home.html which dispays the home page//

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// GET Route to /survey which should display the survey page//
app.get("/survey", function(req,res){
  res.sendFile(path.join((__dirname, "public/survey.html")))
});

// Starts the server to begin listening
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
})




