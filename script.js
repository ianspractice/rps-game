const log = console.log;
//create variables to hold the humans's score and another to hold the computer's score
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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

//play a round and compare human choice to computer choice to see who wins
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    alert("Computer wins! Paper covers rock.");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("Human wins! Rock breaks scissors.");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("Human wins! Paper covers rock.");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert("Computer wins! Scissors cut paper.");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("Human wins! Scissors cut paper.");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("Computer wins! Rock breaks scissors.");
  } else {
    alert("Tie!");
  }
}
log("Human: " + humanSelection + " Computer: " + computerSelection);
playRound(humanSelection, computerSelection);
