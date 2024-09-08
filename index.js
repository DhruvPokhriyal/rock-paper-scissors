// Create a global array that contains all the choices of rock, paper and scissors game
// Create a get computer choice function 
// Inside get computer choice function generate a random number from 0 to 2 (both inclusive)
// Return a string(rock, paper, scissors) corresponding to the number 
let choices = ["rock", "paper", "scissors"];
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    let compChoice = choices[randomChoice];
    return compChoice;
}