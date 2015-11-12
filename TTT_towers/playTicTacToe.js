var ttt = require("./TTT");

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var b = new ttt.Board();
var g = new ttt.Game(reader);
