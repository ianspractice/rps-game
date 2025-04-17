const choices = document.querySelector(".choices");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const log = console.log;
//create variables to hold the humans's score and another to hold the computer's score
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
const btns = document.querySelectorAll("button");

//calculate computer's choice to randomnly select rock, paper, or scissors
function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.26) {
    return "Rock";
  } else if (randomNumber < 0.62) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//get the humas's choice
// function getHumanChoice() {
//   return prompt("Please enter 'Rock' 'Paper' or 'Scissors'").toLowerCase();
// }

//play a round and compare human choice to computer choice to see who wins
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    result.innerHTML = "Paper covers rock. Computer wins!";
    return (computerScore += 1);
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    result.innerHTML = "Rock breaks scissors. You win!";
    return (humanScore += 1);
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    result.innerHTML = "Paper covers rock. You win!";
    return (humanScore += 1);
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    result.innerHTML = "Scissors cut paper. Computer wins!";
    return (computerScore += 1);
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    result.innerHTML = "Scissors cut paper. You win! ";
    return (humanScore += 1);
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    result.innerHTML = "Rock breaks scissors. Computer wins!";
    return (computerScore += 1);
  } else {
    result.innerHTML = "Tie!";
    return (tieScore += 1);
  }
}

//play rounds with buttons
// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     let humanChoice = btn.textContent.toLowerCase();
//     let computerChoice = getComputerChoice();
//     log(humanChoice);
//     log(computerChoice);
//     playRound(humanChoice, computerChoice);
//   });
// });

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btnText = btn.textContent;
    playGame(btnText);
  });
});

//play the game only 5 times
function playGame(btnText) {
  let humanSelection = btnText;
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  choices.innerHTML = `You chose: ${humanSelection} <br>
  Computer chose: ${computerSelection}`;
  score.innerHTML = `Your score: ${humanScore} <br>
  Computer score: ${computerScore}`;
  log("Human selection: " + humanSelection);
  log("Computer selection: " + computerSelection);
  log("Human score: " + humanScore);
  log("Computer score: " + computerScore);

  //declare a winner
  if (humanScore > computerScore && humanScore === 5) {
    score.innerHTML = `
      You won!!
<br>
      Final Scores
      <br>
      You: ${humanScore}
      <br>
      Computer: ${computerScore}
      <br>
      Tie: ${tieScore}`;
    humanScore = 0;
    computerScore = 0;
    tieScore = 0;
  } else if (humanScore < computerScore && computerScore === 5) {
    score.innerHTML = `
      Computer wins!!
<br>
      Final Scores
      <br>
      You: ${humanScore}
      <br>
      Computer: ${computerScore}
      <br>
      Tie: ${tieScore}`;
    humanScore = 0;
    computerScore = 0;
    tieScore = 0;
  } else if (humanScore === 5 && computerScore === 5) {
    score.innerHTML = `
      It's a tie!
<br>
      Final Scores
      <br>
      You: ${humanScore}
      <br>
      Computer: ${computerScore}
      <br>
      Tie: ${tieScore}`;
    humanScore = 0;
    computerScore = 0;
    tieScore = 0;
  }
}

//playGame();
