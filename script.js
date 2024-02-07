let computerScore = 0;
let humanScore = 0;
let humanChoice;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let num = Math.floor(Math.random() * 3);
  return choices[num];
}

function determineWinner(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else if (humanChoice === computerChoice) {
    return "tie";
  } else {
    return "computer";
  }
}

function playGame(humanChoice) {
  let computerChoice = getComputerChoice();
  let winner = determineWinner(humanChoice, computerChoice);
  if (winner === "human") humanScore++;
  if (winner === "computer") computerScore++;
  document.getElementById("results").innerText = `Winner: ${winner}`;
  document.getElementById(
    "score"
  ).innerText = `Computer: ${computerScore}; Human: ${humanScore}`;
  checkEndGame();
  return winner;
}

function checkEndGame() {
  if (humanScore === 5) {
    const newDiv = document.createElement("div");
    newDiv.textContent = "The humans have won! Now you get to eat pizza!";
    const parent = document.getElementById("score");
    parent.appendChild(newDiv);
  }
  if (computerScore === 5) {
    const newDiv = document.createElement("div");
    newDiv.textContent = "The computers have won! Now you get to eat worms!";
    const parent = document.getElementById("score");
    parent.appendChild(newDiv);
  }
}

document.getElementById("rock").addEventListener("click", function () {
  humanChoice = "rock";
  playGame(humanChoice);
});

document.getElementById("paper").addEventListener("click", function () {
  humanChoice = "paper";
  playGame(humanChoice);
});

document.getElementById("scissors").addEventListener("click", function () {
  humanChoice = "scissors";
  playGame(humanChoice);
});
