// Let's write a Tic-Tac-Toe game!
//
// You should have a Board class and a Game class. The board should have methods like #won?, winner, empty?(pos), place_mark(pos, mark), etc.
// If you want to be a little fancy, read this.
// The Game class should have a play method that loops, reading in user moves. When the game is over, exit the loop.
// You should have a class that represents a human player (HumanPlayer), and another class for a computer player (ComputerPlayer). Start with the human player first.
// Both HumanPlayer and ComputerPlayer should have the same API; they should have the same set of public methods. This means they should be interchangeable.
// Your Game class should be passed two player objects on instantiation; because both player classes have the same API, the game should not know nor care what kind of players it is given.
// Keep the computer AI simple: make a winning move if available; else move randomly.
// Get a TA to review your work and make suggestions!

var Board = function() {
  this.grid = [[null, null, null],[null, null, null],[null, null, null]];
  this.players = ["O", "X"];
};

Board.prototype.isWon = function () {
  var checkRow = function(row) {
    if (row[0] === row[1] && row[1] === row[2] && row[0] != null) { return true; }
  };

  var rows = this.grid;

  var g = this.grid;
  var diags = [[g[0][0], g[1][1], g[2][2]], [g[2][0], g[1][1], g[0][2]]];
  var cols = [[g[0][0], g[1][0], g[2][0]],
              [g[0][1], g[1][1], g[2][1]],
              [g[0][2], g[1][2], g[2][2]] ];

  var allGroups = rows.concat(cols).concat(diags);

  for (var i = 0; i < allGroups.length; i ++) {
    if (checkRow(allGroups[i])) { return true; }
  }

  return false;
};

Board.prototype.winner = function() {
  return this.players[1];
};

Board.prototype.isEmpty = function(pos) {
  return !this.grid[pos[0]][pos[1]];
};

Board.prototype.placeMark = function(pos, mark) {
  this.grid[pos[0]][pos[1]] = mark;
};

module.exports = Board;
