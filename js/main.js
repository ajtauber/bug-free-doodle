console.log("Js Works");

// Win Outcomes
let win00 = [0, 1, 2] // Top Across
let win01 = [3, 4, 5] // Middle Across
let win02 = [6, 7, 8] // Bottom Across
let win03 = [0, 3, 6] // Left Down
let win04 = [1, 4, 7] // Middle Down
let win05 = [2, 5, 8] // Bottom Down
let win06 = [0, 4, 8] // Left Diagonal Down
let win07 = [2, 4, 6] // Right Diagonal Down

// display the array
// var ROWS = board.length;
// var COLUMNS = board[0].length;



//the 2d array that defines the board
const board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];
const game = {
  player: "X",
  isWinner: function(){
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board.length; j++) {
        array[i]
      }
      board[i]++;

    },

    // if(player === win00 || player === win01 || player === win02 || player === win03 || player === win04 || player === win05 || player === win06 || player === win07)
  }

}

function checkBoard() {
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[i].length; j++)
    if(board[i][j] == "") {
      return true;
    }
  }
  return false;
}













//get a reference to the stage
// var stage = document.querySelector("#stage");


//
// for(var row = 0; row < ROWS; row++)
// {
//     for(var column = 0; column < COLUMNS; column++)
//     {
//         //create a div HTML element called cell
//         var cell = document.createElement("div");
//
//         //set its CSS class to cell
//         cell.setAttribute("class", "cell");
//
//         //add the div HTML element to the stage
//         stage.appendChild(cell);
//
//         //position the cell
//         cell.style.top = row * (SIZE + SPACE) + "px";
//         cell.style.left = column * (SIZE + SPACE) + "px";
//         cell.addEventListener("click", clickHandler, false);
//     }
// }
//
//
// function clickHandler(event)
// {
//     console.log(event);
//     event.currentTarget.style.backgroundColor = "red";
//     console.log("worked");
// }
