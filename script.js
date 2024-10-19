// Adding and initializing the scores
let humanScore = 0;
let computerScore = 0;

function humanChoice(choice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(choice, computerChoice);

  if (result === "human") {
    humanScore++; // Increase player's score
    alert(
      `You win! You chose ${choice} and the computer chose ${computerChoice}.`
    );
  } else if (result === "computer") {
    computerScore++; // Increase computer's score
    alert(
      `You lose! You chose ${choice} and the computer chose ${computerChoice}.`
    );
  } else {
    alert(
      `It's a tie! You chose ${choice} and the computer chose ${computerChoice}.`
    );
  }

  updateScores(); // Update the displayed scores
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; // Possible choices
  const randomIndex = Math.floor(Math.random() * choices.length); // Get a random index
  return choices[randomIndex]; // Return computer's choice
}

function determineWinner(human, computer) {
  // Determine the winner based on the choices
  if (human === computer) {
    return "tie"; // Return "tie" if both choices are the same
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")
  ) {
    return "human"; // Player wins
  } else {
    return "computer"; // Computer wins
  }
}

function updateScores() {
  // Update the score display
  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;

  // Check if either player has reached 5 points
  if (humanScore === 5) {
    alert("Game Over! You win!");
    resetGame(); // Call resetGame to reset scores
  } else if (computerScore === 5) {
    alert("Game Over! The computer wins!");
    resetGame(); // Call resetGame to reset scores
  }
}

function resetGame() {
  // Reset scores to zero when the game ends
  humanScore = 0;
  computerScore = 0;

  // Update score display to reflect the reset
  updateScores();
}
