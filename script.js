const log = console.log;
//create variables to hold the humans's score and another to hold the computer's score
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

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
    return (computerScore += 1);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("Human wins! Rock breaks scissors.");
    return (humanScore += 1);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("Human wins! Paper covers rock.");
    return (humanScore += 1);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert("Computer wins! Scissors cut paper.");
    return (computerScore += 1);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("Human wins! Scissors cut paper.");
    return (humanScore += 1);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("Computer wins! Rock breaks scissors.");
    return (computerScore += 1);
  } else {
    alert("Tie!");
    return (tieScore += 1);
  }
}

//play the game 5 times
function playGame() {
  for (i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    log("Human selection: " + humanSelection);
    log("Computer selection: " + computerSelection);
    log("Human score: " + humanScore);
    log("Computer score: " + computerScore);
  }
  //declare a winner
  if (humanScore > computerScore) {
    return alert(`
      Human wins!!
      
      Final Scores
      Tie: ${tieScore}
      Human: ${humanScore}
      Computer: ${computerScore}`);
  } else if (humanScore < computerScore) {
    return alert(`
      Computer wins!!

      Final Scores
      Tie: ${tieScore}
      Human: ${humanScore}
      Computer: ${computerScore}`);
  } else {
    return alert(`
      It's a tie!

      Final Scores
      Tie: ${tieScore}
      Human: ${humanScore}
      Computer: ${computerScore}`);
  }
}

playGame();
