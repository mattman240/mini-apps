//Tic-Tac-Toe
let turnNumber = 0;

//make the gameboard
let gameBoard = [
  ['','',''],
  ['','',''],
  ['','','']
];

//neater and more reusable code for getting the element
let spots = {
  0: document.getElementById('one'),
  1: document.getElementById('two'),
  2: document.getElementById('three'),
  3: document.getElementById('four'),
  4: document.getElementById('five'),
  5: document.getElementById('six'),
  6: document.getElementById('seven'),
  7: document.getElementById('eight'),
  8: document.getElementById('nine')
};

let turnXorO = turnNumber => {
  if(turnNumber % 2 === 0) {return 'X'} else {return 'O'};
}

//click function
const boardClick = (num) => {
  let players = turnXorO(turnNumber)
    if(spots[num].innerHTML === '') {
      spots[num].innerHTML = players;
      //if yes pass to even function
      player(num, players);
      //increase play count
      turnNumber++;
      //else we know it is an O play
    } else {
      window.alert('can\'t place piece there')
    }
  if (turnNumber > 8) {
    //if yes alert
    document.getElementById('title').innerHTML = 'Tie Game';
  }
}

      const winner = who => {
        document.getElementById('title').innerHTML = `Player ${who} won the game!!!`
        counter = -100;
      }

spots[0].addEventListener('click', () => boardClick(0));
//two click
spots[1].addEventListener('click', () => boardClick(1));
//three click
spots[2].addEventListener('click', () => boardClick(2));
//four click
spots[3].addEventListener('click', () => boardClick(3));
//five click
spots[4].addEventListener('click', () => boardClick(4));
//six click
spots[5].addEventListener('click', () => boardClick(5));
//seven click
spots[6].addEventListener('click', () => boardClick(6));
//eight click
spots[7].addEventListener('click', () => boardClick(7));
//nine click
spots[8].addEventListener('click', () => boardClick(8));

//function to handle the first players clicks always X
const player = (num, piece) => {
  //check if the num is less than 3
  if(num < 3) {
  //if yes index top row of board
    gameBoard[0][num] = piece
  //else check if it is the middle array of our board 
  } else if (num < 6 && num > 2) {
    //if yes then fix num for proper indexing
    num = num - 3;
    //if yes index middle row of gameBoard
    gameBoard[1][num] = piece;
  } else {
    //adjust for bottom array
    num = num - 6;
    //if yes index bottom row of gameBoard
    gameBoard[2][num] = piece;
  }
  //row check for winner
  gameBoard.forEach(line => {
    //counter for rows
    let counter = 0;
    //counter for left col
    let total = 0;
    //counter for middle col
    let middleTotal = 0;
    //counter for right col
    let endTotal = 0;
    //check diagonal top left to bottom right
    if(gameBoard[0][0] === piece && gameBoard[1][1] === piece && gameBoard[2][2] === piece) {
      winner(piece);
    }
    //check diagonal top right to bottom left
    if(gameBoard[0][2] === piece && gameBoard[1][1] === piece && gameBoard[2][0] === piece) {
      winner(piece);
    }
    //checks rows
    line.forEach(play => {
      if (play === piece) {
        counter++;
      }
    });
  gameBoard.forEach(col => {
    //checks the left col
    if(col[0] === piece) {
      total += 1
    }
    //checks the middle col
    if(col[1] === piece) {
      middleTotal += 1
    }
    //checks the right col
    if(col[2] === piece) {
      endTotal += 1
    }
  })
    //if a win is found
    if (counter > 2 || total > 2 || middleTotal > 2 || endTotal > 2) {
      winner(piece);
      return;
    }
  });
}
