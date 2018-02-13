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

//click function
const boardClick = (num) => {
  //check if the game has ended due to a tie
  //check if an even turn was played
  if(turnNumber % 2 === 0) {
    //set the spot clicked to X
    if(spots[num].innerHTML === '') {
      spots[num].innerHTML = 'X';
      //if yes pass to even function
      playerX(num);
      //increase play count
      turnNumber++;
      //else we know it is an O play
    } else {
      window.alert('can\'t place piece there')
    }
  } else {
    //set the clicked spot to O
    spots[num].innerHTML = 'O';
    //else pass to odd function
    playerO(num);
    //increse count
    turnNumber++;
  }
  if (turnNumber > 8) {
    //if yes alert
    document.getElementById("title").innerHTML = "Tie Game";
    //then reload the page for next game
  setTimeout(() => window.location.reload(true), 3000);
  }
}
//alerts who won the game
const winner = who => {
  document.getElementById('title').innerHTML = `Player ${who} won the game!!!`
  //and refresh the page
  setTimeout(() => window.location.reload(true), 3000)
}
//one click

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
const playerX = num => {
  //check if the num is less than 3
  if(num < 3) {
  //if yes index top row of board
    gameBoard[0][num] = 'X'
  //else check if it is the middle array of our board 
  } else if (num < 6 && num > 2) {
    //if yes then fix num for proper indexing
    num = num - 3;
    //if yes index middle row of gameBoard
    gameBoard[1][num] = 'X';
  } else {
    //adjust for bottom array
    num = num - 6;
    //if yes index bottom row of gameBoard
    gameBoard[2][num] = 'X';
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
    if(gameBoard[0][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][2] === 'X') {
      counter = 3;
    }
    //check diagonal top right to bottom left
    if(gameBoard[0][2] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][0] === 'X') {
      counter = 3;
    }
    //checks rows
    line.forEach(piece => {
      if (piece === 'X') {
        counter++;
      }
    });
  gameBoard.forEach(col => {
    //checks the left col
    if(col[0] === 'X') {
      total += 1
    }
    //checks the middle col
    if(col[1] === 'X') {
      middleTotal += 1
    }
    //checks the right col
    if(col[2] === 'X') {
      endTotal += 1
    }
  })
    //if a win is found
    if (counter > 2 || total > 2 || middleTotal > 2 || endTotal > 2) {
      winner('X');
      return;
    }
  });
}

//function to handle the second players clicks always O
const playerO = num => {
  //check if the num is less than 3
  if(num < 3) {
  //if yes index top row of board
    gameBoard[0][num] = 'O'
  //else check if it is the middle array of our board 
  } else if (num < 6 && num > 2) {
    //if yes then fix num for proper indexing
    num = num - 3;
    //if yes index middle row of gameBoard
    gameBoard[1][num] = 'O';
  } else {
    //adjust for bottom array
    num = num - 6;
    //if yes index bottom row of gameBoard
    gameBoard[2][num] = 'O';
  }
  //check for row wins
    gameBoard.forEach(line => {
    //row counter
    let counter = 0;
    //left col counter
    let total = 0;
    //middle col counter
    let middleTotal = 0;
    //right col counter
    let endTotal = 0;
    //check diagonal top left to bottom right
    if(gameBoard[0][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][2] === 'O') {
      counter = 3;
    }
    //check diagonal top right to bottom left
    if(gameBoard[0][2] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][0] === 'O') {
      counter = 3;
    }
    //checks each row
    line.forEach(piece => {
      if (piece === 'O') {
        counter++;
      }
    });
    gameBoard.forEach(col => {
      //checks left col
      if (col[0] === 'O') {
        total += 1;
      }
      //checks middle col
      if (col[1] === 'O') {
        middleTotal += 1;
      }
      //checks right col
      if (col[2] === 'O') {
        endTotal += 1;
      }
    });
    //if a win is found
    if (counter > 2 || total > 2 || middleTotal > 2 || endTotal > 2) {
      winner('O');
      return;
    }
  });
}

