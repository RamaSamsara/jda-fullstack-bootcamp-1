// Step 1: Get user and computer choices
let userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random() * 3)];

// Step 2: Show both choices
console.log("You chose:", userChoice);
console.log("Computer chose:", computerChoice);

// Step 3: Determine the winner
if (userChoice === computerChoice) {
  console.log("It's a tie!");
} else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")
) {
  console.log("You win!");
} else if (choices.includes(userChoice)) {
  console.log("Computer wins!");
} else {
  console.log("Invalid input! Please choose rock, paper, or scissors.");
}
