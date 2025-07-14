
const container = document.querySelector("#container");

// Intro Section
const introDiv = document.createElement("div");
introDiv.classList.add("introduction");
container.appendChild(introDiv);

const head1 = document.createElement("h1");
head1.textContent = "Welcome to Rock, Paper, Scissors";
introDiv.appendChild(head1);

const head2 = document.createElement("h2");
head2.textContent = "First to 5 wins!";
introDiv.appendChild(head2);

// Game Section
const gameDiv = document.createElement("div");
gameDiv.classList.add("game-content");
container.appendChild(gameDiv);

// Score
let humanScore = 0;
let computerScore = 0;

// Scoreboard
const scoreBoard = document.createElement("h3");
scoreBoard.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
gameDiv.appendChild(scoreBoard);

// Choices Display
const humanChoiceDisplay = document.createElement("h3");
humanChoiceDisplay.textContent = "You chose: ";
gameDiv.appendChild(humanChoiceDisplay);

const compChoiceDisplay = document.createElement("h3");
compChoiceDisplay.textContent = "Computer chose: ";
gameDiv.appendChild(compChoiceDisplay);

// Result Display
const resultDisplay = document.createElement("h2");
resultDisplay.textContent = "Result: ";
gameDiv.appendChild(resultDisplay);

// Final Result
const finalResult = document.createElement("h2");
finalResult.style.color = "green";
gameDiv.appendChild(finalResult);

// Choices Array
const choices = ["Rock", "Paper", "Scissor"];

// Function to get computer choice
function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// Function to play a round
function playRound(humanChoice) {
  if (humanScore >= 5 || computerScore >= 5) return; // Stop if game over

  const computerChoice = getComputerChoice();

  humanChoiceDisplay.textContent = `You chose: ${humanChoice}`;
  compChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;

  if (
    (humanChoice === "Rock" && computerChoice === "Scissor") ||
    (humanChoice === "Scissor" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore++;
    resultDisplay.textContent = "Result: You win this round!";
  } else if (humanChoice === computerChoice) {
    resultDisplay.textContent = "Result: It's a tie!";
  } else {
    computerScore++;
    resultDisplay.textContent = "Result: Computer wins this round!";
  }

  scoreBoard.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    finalResult.textContent = humanScore === 5 ? "You won the game!" : "Computer won the game!";
  }
}

// Create buttons
choices.forEach(choice => {
  const btn = document.createElement("button");
  btn.textContent = choice;
  btn.style.marginRight = "8px";
  btn.addEventListener("click", () => playRound(choice));
  gameDiv.appendChild(btn);
});

// Restart Button
const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart Game";
gameDiv.appendChild(restartBtn);

restartBtn.addEventListener("click", () => {
  // Reset scores
  humanScore = 0;
  computerScore = 0;

  // Reset displays
  scoreBoard.textContent = `Score - You: 0 | Computer: 0`;
  humanChoiceDisplay.textContent = "You chose: ";
  compChoiceDisplay.textContent = "Computer chose: ";
  resultDisplay.textContent = "Result: ";
  finalResult.textContent = "";
});

