// Dependencies
// ==============================
var express = require(`express`);
var path = require ("path");

// Sets up the Express App
// ================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing

// app.get(`/`,function(req,res){
//   res.send(`FriendFinder App`)
// })


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// GET Route to /survey which should display the survey page//
app.get("/survey", function(req,res){
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


app.listen(PORT, function(){
  console.log(`listening on  ` + PORT)
})