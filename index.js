let CHOICES = ["rock", "paper", "scissors"];

// Create a global array that contains all the choices of rock, paper and scissors game
// Create a get computer choice function
// Inside get computer choice function generate a random number from 0 to 2 (both inclusive)
// Return a string(rock, paper, scissors) corresponding to the number
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  let compChoice = CHOICES[randomChoice];
  return compChoice;
}

// Create a function that returns human Choice
// Take input from user using prompt
// Check whether the input is correct and return input if it a valid input
// If it's an invalid input show an alert to user containing message that it's invalid input

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

// Create a playGame function that plays the entire game
// It plays the game 5 times

function playGame() {
  // Initializing player scores variable with a value 0

  let humanScore = 0;
  let computerScore = 0;
  // Create a function playRound
  // It takes two parameter humanChoice and computerChoice
  // It uses conditional to checks who wins and update the scores accordingly

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
