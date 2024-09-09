let CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  let compChoice = CHOICES[randomChoice];
  return compChoice;
}

function getHumanChoice() {
  let humChoice = prompt(
    "Enter your choice(rock/paper/scissors): "
  ).toLowerCase();
  if (humChoice == "rock" || humChoice == "paper" || humChoice == "scissors") {
    return humChoice;
  } else {
    alert("!! Enter a valid choice. !!");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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
    return;
  }
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log("Your Score : " + humanScore);
  console.log("Computer Score : " + computerScore);
}

playGame();
