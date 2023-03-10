//

const checkChoice = {
  0: "rock",
  1: "paper",
  2: "scissors",
};

// computer and a player
let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

const flag = true;

while (flag) {
  const startGame = prompt(
    "Do you want to play Rock Paper Scissors? | yes or exit to end the game"
  );

  if (startGame !== "exit" && startGame === "yes") {
    alert("computer turn");
    computerChoice = Math.floor(Math.random() * 3);

    alert("Player turn");
    playerChoice = Number(prompt("0 = rock, 1 = paper or 2 = scissors"));

    if (computerChoice === 0) {
      switch (playerChoice) {
        case 1:
          alert(
            `computer chose: "${checkChoice[computerChoice]}" -Player wins`
          );
          playerScore += 5;
          break;
        case 2:
          alert(
            `computer chose: "${checkChoice[computerChoice]}" -Computer wins`
          );
          computerScore += 5;
          break;
        case 0:
          alert(
            `computer chose: "${checkChoice[computerChoice]}" -It is a draw`
          );
          break;
        default:
          alert("please enter either 1, 0 or 2");
      }
    } else if (computerChoice === 1) {
      switch (playerChoice) {
        case 1:
          alert(
            `computer chose: "${checkChoice[computerChoice]}" -It is a draw`
          );
          break;
        case 2:
          alert(
            `computer chose: "${checkChoice[computerChoice]}" -Player wins`
          );
          playerScore += 5;
          break;
        case 0:
          alert(
            `computer chose: "${checkChoice[computerChoice]}" -Computer wins`
          );
          computerScore += 5;
          break;
        default:
          alert("please enter either 1, 0 or 2");
      }
    } else {
      switch (playerChoice) {
        case 1:
          alert(
            `computer chose: "${checkChoice[computerChoice]}" -Computer wins`
          );
          computerScore += 5;
          break;
        case 2:
          alert(
            `computer chose: "${checkChoice[computerChoice]}" -It is a draw`
          );
          break;
        case 0:
          alert(
            `computer chose: "${checkChoice[computerChoice]}" -Player wins`
          );
          playerScore += 5;
          break;
        default:
          alert("please enter either 1, 0 or 2");
      }
    }

    alert(
      "Player score = " +
        playerScore +
        "pts" +
        "\n" +
        "Computer score = " +
        computerScore +
        "pts"
    );

    playerScore === computerScore
      ? alert("It's a draw")
      : playerScore > computerScore
      ? alert("Player wins this round")
      : alert("Computer wins this round");
  } else {
    flag = false;
  }
}
