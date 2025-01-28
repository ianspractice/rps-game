const log = console.log;
//create variables to hold the humans's score and another to hold the computer's score
let humanScore = 0;
let computerScore = 0;

//calculate computer's choice to randomnly select rock, paper, or scissors
function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.26) {
    return "rock";
  } else if (randomNumber < 0.62) {
    return "paper";
  } else {
    return "scissors";
  }
}

//get the humas's choice
function getHumanChoice() {
  return prompt("Please enter 'Rock' 'Paper' or 'Scissors'").toLowerCase();
}
