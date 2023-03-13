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

let flag = true;

let mychecker;
while (flag) {
	const startGame = prompt(
		"Do you want to play Rock Paper Scissors? | yes or exit to end the game"
	);

	if (startGame !== "exit" && startGame === "yes") {
		mychecker = 1;
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

			if (playerChoice === 1) {
				alert("Player wins this round");
			} else if (playerChoice === 2) {
				alert("Computer wins this round");
			} else {
				alert("This round ended in a draw");
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
			if (playerChoice === 1) {
				alert("This round ended in a draw");
			} else if (playerChoice === 2) {
				alert("Player wins this round");
			} else {
				alert("Computer wins this round");
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
			if (playerChoice === 1) {
				alert("Computer wins this round");
			} else if (playerChoice === 2) {
				alert("This round ended in a draw");
			} else {
				alert("Player wins this round");
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

		//   playerScore === computerScore? alert("It's a draw"): playerScore > computerScore? alert("Player wins this round")
		//     : alert("Computer wins this round");

		// if(playerScore > computerScore){
		//    alert("Player wins this round");
		// }else if(computerScore > playerScore){
		//    alert("Computer wins this round");
		// }else{
		//    alert("It's a draw");
		// }
	} else {
		if (playerScore > computerScore) {
			let highestScore = playerScore;
			//  alert("Total Player Score " + highestScore + "pts \n" + "Total Computer Score " + computerScore + "\n"+ "Highest Score:  Player - Winner");
			console.log(
				"Total Player Score: " +
					highestScore +
					"pts \n" +
					"Total Computer Score: " +
					computerScore +
					" pts" +
					"\n" +
					"Highest Score:  Player  Winner"
			);
		} else if (computerScore > playerScore) {
			let highestScore = computerScore;
			// alert("Total Computer score " + highestScore + "pts \n" + "Total Player Score"  + playerScore + "\n" + "Highest Score:  Computer - Winner");
			console.log(
				"Total Computer score: " +
					highestScore +
					"pts \n" +
					"Total Player Score: " +
					playerScore +
					" pts" +
					"\n" +
					"Highest Score:  Computer  is the winner"
			);
		} else {
			if (mychecker == 1) {
				highestScore = computerScore;
				// alert("Draw by  computer and player" + highestScore + " pts \n" + "No - Winner");
				console.log(
					"Draw by  computer and player: " +
						highestScore +
						" pts \n" +
						"No Winner"
				);
			} else {
				console.log("game didnt start");
			}
		}
		flag = false;
	}
}
