// This file listens for the HTML calls

// Dependencies
var path = require("path");

// Here we export the code for other files to import
module.exports=function(app){

  
  // A default, catch-all route that leads to home.html which dispays the home page//
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  
  // GET Route to /survey which should display the survey page//
  app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
}
  


