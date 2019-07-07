// Dependencies
// ==============================
var express = require(`express`);
var path = require ("path");

// Sets up the Express App
// ================================
var app = express();
var PORT = process.env.PORT || 3026;


// Sets up the Express app to handle data parsing
// app.get(`/`,function(req,res){
//   res.send(`FriendFinder App`)
// })




// FriendFinder Candidate sample Data of 3 for testing purposes only. The data here can be deleted once we're able to access the data folder:
var candidates = [
  {
    "name": "Robin Scherbatsky",
    "photo": "https://www.bing.com/th?id=AMMS_958f8fd391cc387c2300dbff88348f8a&w=300&h=300&c=12&rs=1&qlt=80&cdv=1&dpr=1.25&pid=16.2",
    "scores": [
      5,
      2,
      4,
      4,
      5,
      2,
      1,
      2,
      5,
      4
    ]
  },

  {
    "name": "Ted Mosby",
    "photo": "https://www.bing.com/th?id=AMMS_ae7d507edcaec798c22205933c94d2d5&w=300&h=300&c=12&rs=1&qlt=80&cdv=1&dpr=1.25&pid=16.2",
    "scores": [
      1,
      4,
      3,
      2,
      1,
      2,
      4,
      2,
      5,
      4
      
    ]
  },

  {
    "name": "Lily Aldrin",
    "photo": "https://www.bing.com/th?id=AMMS_a1f1830fa3c5d767bd1462777a6aefe9&w=300&h=300&c=12&rs=1&qlt=80&cdv=1&dpr=1.25&pid=16.2",
    "scores": [
      1,
      4,
      3,
      2,
      5,
      2,
      4,
      2,
      1,
      4
      
    ]
  },
];


// Determin who is compatible
// Create variable of person looking for a friend. This is created to test the program. When its working the information will be entered dynamically
var FriendNeeded = {
  "name": "Barney",
  "photo": "",
  "scores": [1,4,3,2,1,1,2,3,4,5]
}


// Loop through the FriendNeeded array and candidates array and determine the match. The variable score is the difference in the answers between the two arrays
for (var j = 0; j < candidates.length; j++){
  var score =0;
  for (var i =0; i<10; i++){
    score = score + Math.abs((FriendNeeded.scores[i]-candidates[j].scores[i]));
  }
  // create an array of objects that will provide the name and the match number 
  
}
 



// Routes==============================================

//Basic rout that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/home.html"));
// });


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});


// GET Route to /survey which should display the survey page//
app.get("/survey", function(req,res){
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});


// Displays all candidates
app.get("api/candidates", function(req, res){
  return res.json(candidates);
});

// Displays a single candidate or returns false
app.get("/api/candidates/:candidate", function(req, res){
  var chosen = req.params.candidate;
  console.log(chosen);
  for (var i = 0; i< candidates.length; i++){
    if(chosen === candidate[i].name){
      return res.json(candidate[i]);
    }
  }
  return res.json(false);
});

// Create a new candidate- takes in JSON input
app.post("/api/candidates", function(req, res){
  //req.body hosts is equal to the JSON post sent from the user.
  // This works because of our body parsing middleware

  var newcandidate = req.body;

  // Using a RegEx pattern to remove spaces fro newcandidate 
  // More informaiton is available at https://www.regexbuddy.com/regex.html
  newcandidate.name = newcandidate.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcandidate);

  candidates.push(newcharacter);

  res.json(newcandidate);
})

// Starts the server to begin listening
app.listen(PORT, function(){
  console.log(`listening on  ` + PORT)
})