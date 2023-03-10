//

// computer and a player
let playerChoice;
let computerChoice;


let playerScore = 0;
let computerScore = 0;

alert("computer turn");
computerChoice = Math.floor(Math.random() * 3);


alert("Player turn");
playerChoice = Number(prompt("0 = rock, 1 = paper or 2 = scissors"));


if (computerChoice === 0) {
  switch (playerChoice) {
    case 1:
      alert("Player wins");
      playerScore += 5
      break;
    case 2:
      alert("Computer wins");
      computerScore += 5
      break;
    case 0:
      alert("It is a draw");
      break;
    default:
      alert("please enter either 1, 0 or 2");
  }
} else if (computerChoice === 1) {
  switch (playerChoice) {
    case 1:
      alert("It is a draw");
      break;
    case 2:
      alert("Player wins");
      playerScore += 5
      break;
    case 0:
      alert("Computer wins");
      computerScore += 5
      break;
    default:
      alert("please enter either 1, 0 or 2");
  }
} else {
  switch (playerChoice) {
    case 1:
      alert("Computer wins");
      computerScore += 5
      break;
    case 2:
      alert("It is a draw");
      break;
    case 0:
      alert("Player wins");
      playerScore += 5
      break;
    default:
      alert("please enter either 1, 0 or 2");
  }
}


alert('Player score = ' + playerScore + 'pts' + '\n' + 'Computer score = ' + computerScore + 'pts' )

playerScore > computerScore ? alert('Player wins this round') : alert('Computer wins this round')
