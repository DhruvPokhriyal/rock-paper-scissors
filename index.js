let CHOICES = ["rock", "paper", "scissors"];

// Create a global array that contains all the choices of rock, paper and scissors game
// Create a get computer choice function 
// Inside get computer choice function generate a random number from 0 to 2 (both inclusive)
// Return a string(rock, paper, scissors) corresponding to the number 
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    let compChoice = CHOICES[randomChoice];
    return compChoice;
}

// Create a function that returns human Choice
// Take input from user using prompt
// Check whether the input is correct and return input if it a valid input 
// If it's an invalid input show an alert to user containing message that it's invalid input

function getHumanChoice(){
    let humChoice = prompt("Enter your choice(rock/paper/scissors): ");
    if (humChoice == "rock" || humChoice == "paper" || humChoice == "scissors"){
        return humChoice;
    } else {
        alert("!! Enter a valid choice. !!");
    }
}


// Initializing player scores variable with a value 0

let humanScore = 0;
let computerScore = 0;