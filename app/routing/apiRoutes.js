// TODO: Should contain two routs
//       TODO:  A GET route with the url /api/friends.  This will be used to display a JSON of all possible friends



// Here we import  data in friends.js
var candidates = require ("../data/friends.js");
module.exports=function(app){
    console.log("api rounts connected!")
  // Displays all candidates
  app.get("/api/candidates", function(req, res){
    res.json(candidates);
  });
  

  
  // Create a new candidate- takes in JSON input
  app.post("/api/candidates", function(req, res){
    console.log("here!");
    //req.body hosts is equal to the JSON post sent from the user.
    // This works because of our body parsing middleware
    
    var newcandidate = req.body;
    console.log(newcandidate);
    // Using a RegEx pattern to remove spaces fro newcandidate 
    // More informaiton is available at https://www.regexbuddy.com/regex.html
    newcandidate.name = newcandidate.name.replace(/\s+/g, "").toLowerCase();
    
    console.log(newcandidate);
    // Loop through the FriendNeeded array and candidates array and determine the match. The variable score is the difference in the answers between the two arrays
    // for (var j = 0; j < candidates.length; j++){
    //   var score =0;
    //   for (var i =0; i<10; i++){
    //     score = score + Math.abs((FriendNeeded.scores[i]-candidates[j].scores[i]));
    //   }
    //   // create an array of objects that will provide the name and the match number  )
    //   console.log(score);
    // }
    
    candidates.push(newcandidate);
    
    res.json(newcandidate);
  })
  
  // Determin who is compatible
  // Create variable of person looking for a friend. This is created to test the program. When its working the information will be entered dynamically
  // var FriendNeeded = {
  //   "name": "Barney",
  //   "photo": "",
  //   "scores": [1,4,3,2,1,1,2,3,4,5]
  // }
  
  
}