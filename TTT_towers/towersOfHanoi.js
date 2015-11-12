var HanoiGame = function() {
  this.stacks = [ [2,1], [], [] ];
};

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


HanoiGame.prototype.isWon = function() {
  if ((this.stacks[0].length === 0) &&
      (this.stacks[1].length === 0 || this.stacks[2].length === 0 )) {
    return true;
  }

  return false;
};

HanoiGame.prototype.isValidMove = function(move) {
  // false if start tower length === 0
  // false if endTowner last is smaller than start start tower last
  //otherwise true
  var startTowerIdx = move[0];
  var endTowerIdx = move[1];

  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];
  if ((startTower.length === 0) ||
      ( endTower[endTower.length - 1] <  startTower[startTower.length - 1])) {
        return false ; }

  return true;
};

HanoiGame.prototype.move = function(givenMove, completionCallback) {
  var startTowerIdx = givenMove[0];
  var endTowerIdx = givenMove[1];

  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];

   if (this.isValidMove(givenMove)) {
     endTower.push(startTower[startTower.length - 1]);
     startTower.pop();
     } else {
       console.log("Invalid move.");
     }

  if ( !this.isWon() ) { this.promptMove(this.move, completionCallback); }
  else { this.run(completionCallback); }
};

HanoiGame.prototype.print = function() {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function(callback, completionCallback) {
  this.print();
  var startIdx, endIdx;

  var that = this;

  reader.question('What move? (Format: startIdx endIdx): ', function (givenMove) {
    startIdx = parseInt(givenMove[0]);
    endIdx = parseInt(givenMove[givenMove.length - 1]);
    callback.bind(that)([startIdx, endIdx], completionCallback);
  });
};

HanoiGame.prototype.run = function(completionCallback) {
  if ( !this.isWon() ) {
    this.promptMove(this.move, completionCallback);
  } else {
    this.print();
    completionCallback();
  }
};

var game = new HanoiGame();

game.run( function() {
  reader.close();
  console.log("Game over!");
  // game.print();
});
