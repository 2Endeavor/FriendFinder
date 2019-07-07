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
    "name": "Robin Scherbatsky",
    "photo": "https://www.bing.com/th?id=AMMS_958f8fd391cc387c2300dbff88348f8a&w=300&h=300&c=12&rs=1&qlt=80&cdv=1&dpr=1.25&pid=16.2",
    "scores": [
      5,
      2,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },

  {
    "name": "Ted Mosby",
    "photo": "https://www.bing.com/th?id=AMMS_ae7d507edcaec798c22205933c94d2d5&w=300&h=300&c=12&rs=1&qlt=80&cdv=1&dpr=1.25&pid=16.2",
    "scores": [
      5,
      3,
      5,
      4,
      5,
      2,
      2,
      5,
      4,
      1
    ]
  },

  {
    "name": "Lily Aldrin",
    "photo": "https://www.bing.com/th?id=AMMS_a1f1830fa3c5d767bd1462777a6aefe9&w=300&h=300&c=12&rs=1&qlt=80&cdv=1&dpr=1.25&pid=16.2",
    "scores": [
      5,
      4,
      3,
      4,
      5,
      2,
      2,
      1,
      4,
      1
    ]
  },

  {
    "name": "Barney Stinson",
    "photo": "https://www.bing.com/th?id=AMMS_898f4400fd8843eb1f85c1ff9f8723e8&w=300&h=300&c=12&rs=1&qlt=80&cdv=1&dpr=1.25&pid=16.2",
    "scores": [
      5,
      5,
      3,
      4,
      5,
      5,
      2,
      1,
      4,
      2
    ]
  },

  {
    "name": "Marshall Eriksen",
    "photo": "https://www.bing.com/th?id=AMMS_1552aa168e54fdb3a76e59d39c3b825d&w=300&h=300&c=12&rs=1&qlt=80&cdv=1&dpr=1.25&pid=16.2",
    "scores": [
      5,
      1,
      2,
      4,
      5,
      2,
      5,
      5,
      4,
      1
    ]
  }

  
]





