let CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const scorecard = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(scorecard);
scorecard.textContent = `Player Score ${humanScore}\nComputer score ${computerScore}`;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  let compChoice = CHOICES[randomChoice];
  return compChoice;
}

function playRound(humanChoice, computerChoice) {
  humanWin = false;
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You Win, Rock beats scissors.");
    humanWin = true;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You Lose, Rock beats scissors");
  } else if (humanChoice == computerChoice) {
    console.log("It's a draw");
    return;
  } else if (CHOICES.indexOf(humanChoice) < CHOICES.indexOf(computerChoice)) {
    console.log(`You Lose, ${computerChoice} beats ${humanChoice}`);
  } else {
    console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
    humanWin = true;
  }
  if (humanWin) {
    humanScore++;
  } else {
    computerScore++;
  }
  scorecard.textContent = `Player Score ${humanScore}\nComputer score ${computerScore}`;
  if (humanScore >= 5) {
    scorecard.textContent = "Player Wins";
    document.removeEventListener("keydown", playerChoice);
  } else if (computerScore >= 5) {
    scorecard.textContent = "Computer Wins";
    document.removeEventListener("keydown", playerChoice);
  }
  return;
}

function playerChoice(e) {
  switch (e.key) {
    case "p":
      playRound("paper", getComputerChoice());
      break;
    case "r":
      playRound("rock", getComputerChoice());
      break;
    case "s":
      playRound("scissors", getComputerChoice());
      break;
  }
}

document.addEventListener("keydown", playerChoice);
