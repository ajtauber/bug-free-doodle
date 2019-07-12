console.log("JS Works");



var turn;
var user;
var row, col;

const game = {
    moveCounter: 0,
    currentPlayer: "X",



// Used null instead of Strings "". NOTE: Truethy wasnt right from using strings compared to nul
board:  [ null, null, null, null, null, null, null, null, null],




    checkWin: function(){
    // Checks if theres a winner
    if(game.moveCounter < 4) {
      return false;
    }

    // Displays the game board
    var board = game.board;

      // Win Conditions / Outcomes
    if (board[0] === board[1] && board[0] === board[2] && board[1]!== null) {
      return true;
    } if (board[0] === board[3] && board[0] === board[6] && board[0] !== null){
      return true;
    } if (board[1] === board[4] && board[1] === board[7] && board[1] !== null){
      return true;
    } if (board[3] === board[4] && board[3] === board[5] && board[3] !== null){
      return true;
    } if (board[2] === board[5] && board[2] === board[8] && board[2] !== null){
      return true;
    } if (board[6] === board[7] && board[6] === board[8] && board[6] !== null){
      return true;
    } if (board[0] === board[4] && board[0] === board[8] && board[0] !== null){
      return true;
    } if (board[2] === board[4] && board[2] === board[6] && board[2] !== null){
      return true;
    } else {
      return false;
    }

},

  winStatus: function (){
    if (this.win === this.checkWin ){
      console.log('have a winner');
    }
  },
};


//DOM MANIUPULATION SECTION

$(document).ready(function(){

  // GAME TRACKING
  $('.button').click(function(){
    var row = $(this).index();
    var id = this.id;
    // Parsing this variable into an integer value
    var boardIndex = parseInt( this.id );

  //START GAME

    //check board for X or O
    if (game.board[ boardIndex ]) {
      console.log("pick another option 1");
      return;
    }

      //allow click
        $(this).html(game.currentPlayer);


        //add the functions for the board back in
          game.board[ boardIndex ] = game.currentPlayer;
            console.log( " " + this.id);
          game.moveCounter += 1;

          // check for winner/ draw. produce signal if need be.
          if( game.checkWin() ){
            if (game.currentPlayer === "X"){
              console.log('win for ' + game.currentPlayer);
              return;
            }
            if (game.currentPlayer === "O"){
              console.log('win for ' + game.currentPlayer);
              return;
            }
          } else if(game.moveCounter === 9){
            console.log('draw!');
            return;
          }


  // flip the players back and forth
    if (game.currentPlayer === 'X' ) {
          game.currentPlayer = 'O';
          return;
    } if(game.currentPlayer === 'O'){
          game.currentPlayer = 'X';
          return;
      }
  });

}); // $(document).ready()


console.log("YEW");
