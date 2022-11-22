/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

const rps = document.querySelectorAll(".rpsButton");
let randomvalue = Math.floor(Math.random() * rps.length);
const totalScore = {
  playerScore: 0,
  computerScore: 0,
};

const result = document.getElementById("result");
const playerScore = document.getElementById("player-score");
const hands = document.getElementById("hands");
function getComputerChoice() {
  return rps[randomvalue].value;
}
// console.log(getComputerChoice());
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Papper") {
    score = 1;
  } else if (playerChoice == "Papper" && computerChoice == "Scissors")
    score = 1;
  else if (playerChoice == "Scissors" && computerChoice == "Rock") score = 1;
  else {
    score = -1;
  }
  return score;
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)
  // return score
}

console.log(getResult("Scissors", "Rock"));
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  if (score == 1) {
    result.innerText = "You won";
  } else if (score == 0) {
    result.innerText = "it a tie";
  } else {
    result.innerText = "You lose";
  }
  hands.innerText = `🧑‍🦳${playerChoice} vs 💻 ${computerChoice}`;
  playerScore.innerText = `${score}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log(playerChoice);
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  console.log({ score });
  console.log({ totalScore });
  showResult(score, playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
  rps.forEach((rpm) => {
    rpm.addEventListener("click", () => onClickRPS(rpm.value));
  });
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  const endgame = document.getElementById("endGameButton");
  endgame.addEventListener("click", () => {
    hands.innerText = "";
    playerScore.innerText = "";
    result.innerText = "";
  });
}

playGame();
