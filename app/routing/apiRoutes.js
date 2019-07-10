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
    // create an object array that will hold the name and match score
    var match = [];
    
    for (var j = 0; j < candidates.length; j++){
      var score =0;
      for (var i =0; i<10; i++){
        score = score + Math.abs((newcandidate.scores[i]-candidates[j].scores[i]));
      }
      //console.log(score);
      // create an array of objects that will provide the name and the match number  )
    //  console.log(score);
    //  console.log(candidates[j].name);
      match.push({score:score,candidate:candidates[j].name,photo:candidates[j].photo});
      // match.push(score,candidate[j].name)
      // match.push(score);
     // console.log("match");
      //console.log(match);
    }

    console.log(match.length);
    console.log(match[0].score);

    var bestMatch = {}
    for (var i = 0; i<match.length; i++){
      var temp = match[0].score
      if (match[i].score<temp){
        bestMatch = match[i];
        
      }
    }
    
    
    candidates.push(newcandidate);
    //console.log(candidates[j].name)
    //This logs the names and numbers
    //   console.log("line 70")
    //  console.log(match);
    
    console.log("best match line 73")
    console.log(bestMatch);
    
    res.json(bestMatch);
    //res.bestMatch;

    // var bestMatch= []
    // for (var i= 0; i<match.length; i++){
    //  // if (match[i].score<match[i++].score)
    // //  bestMatch = match[i];
    // bestMatch.push(match[i].score)
  
    // }
    // console.log("line 82");
    // console.log (match);
  })
  
  
  
}