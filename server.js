// Dependencies
// ==============================
var express = require(`express`);
var path = require ("path");

// Sets up the Express App
// ================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parcing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Tell the server where to find the routes. "app" here the parameter passed from the module.express function in server.js
require ("./app/routing/apiRoutes")(app);
// create a main directory folder with path.join
require (path.join(__dirname, "./app/routing/htmlRoutes"))(app);


// Starts the server to begin listening
app.listen(PORT, function(){
  console.log(`listening on  ` + PORT)
})