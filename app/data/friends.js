// This is where all the data will reside. The format is shown in the following data samples:

var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Candidates data
var candidates = [

  
  {
    "name": "Ahmed",
    "photo": "https://www.bing.com/images/search?view=detailV2&ccid=xJvP3qzP&id=7DFA6A6C744D77E72DE46DC9C4919B8424B82461&thid=OIP.xJvP3qzP1IwdztNhMlw67QHaEn&mediaurl=https%3a%2f%2fwww.telegraph.co.uk%2fcontent%2fdam%2fpets%2f2017%2f07%2f17%2fTELEMMGLPICT000131209177-xlarge_trans_NvBQzQNjv4BqLfD0EOB5CEFXzCF_NHe0S8zg6NlZ2-aGbyIcXcVFyEI.jpeg&exph=799&expw=1281&q=dog+pictures&simid=608020604706030918&selectedIndex=0",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      2,
      1,
      2,
      5,
      4,
      1
    ]
  },

  {
    "name": "Charlie",
    "photo": "https://www.bing.com/images/search?view=detailV2&ccid=xJvP3qzP&id=7DFA6A6C744D77E72DE46DC9C4919B8424B82461&thid=OIP.xJvP3qzP1IwdztNhMlw67QHaEn&mediaurl=https%3a%2f%2fwww.telegraph.co.uk%2fcontent%2fdam%2fpets%2f2017%2f07%2f17%2fTELEMMGLPICT000131209177-xlarge_trans_NvBQzQNjv4BqLfD0EOB5CEFXzCF_NHe0S8zg6NlZ2-aGbyIcXcVFyEI.jpeg&exph=799&expw=1281&q=dog+pictures&simid=608020604706030918&selectedIndex=0",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      2,
      1,
      2,
      5,
      4,
      1
    ]
  },

  {
    "name": "Same",
    "photo": "https://www.bing.com/images/search?view=detailV2&ccid=xJvP3qzP&id=7DFA6A6C744D77E72DE46DC9C4919B8424B82461&thid=OIP.xJvP3qzP1IwdztNhMlw67QHaEn&mediaurl=https%3a%2f%2fwww.telegraph.co.uk%2fcontent%2fdam%2fpets%2f2017%2f07%2f17%2fTELEMMGLPICT000131209177-xlarge_trans_NvBQzQNjv4BqLfD0EOB5CEFXzCF_NHe0S8zg6NlZ2-aGbyIcXcVFyEI.jpeg&exph=799&expw=1281&q=dog+pictures&simid=608020604706030918&selectedIndex=0",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      2,
      1,
      2,
      5,
      4,
      1
    ]
  },

  
]

// Routes




