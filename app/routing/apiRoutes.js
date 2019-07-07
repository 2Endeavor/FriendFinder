// TODO: Should contain two routs
//       TODO:  A GET route with the url /api/friends.  This will be used to display a JSON of all possible friends



// Here we import  data in friends.js
var candidates = require ("../data/friends.js");
module.exports=function(app){
    
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
    // console.log("this is the new candidates name " + newcandidate.name);
    // console.log("this is the new candidates name " + newcandidate);

    // Using a RegEx pattern to remove spaces from newcandidate 
    // More informaiton is available at https://www.regexbuddy.com/regex.html
   
   // I DON'T THINK THIS LINE OF CODE IS NEEDED
    // newcandidate.name = newcandidate.name.replace(/\s+/g, "").toLowerCase();
    
    
    // Loop through the FriendNeeded array and candidates array and determine the match. The variable score is the difference in the answers between the two arrays
    // for (var j = 0; j < candidates.length; j++){
    //   var score =0;
    //   for (var i =0; i<10; i++){
    //     score = score + Math.abs((newcandidate.scores[i]-candidates[j].scores[i]));
    //   }
    //   // create an array of objects that will provide the name and the match number  )
    //   console.log(score);
    // }
    
    candidates.push(newcandidate);
    console.log(candidates.name)
    
    
    res.json(newcandidate);
  })
  
  
  
}