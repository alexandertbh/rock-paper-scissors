console.log("Hi! Lets play Rock, Paper, Scissors!");

const userInput = document.getElementById('userInput').value;

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("You must input Rock, Paper, Or Scissors");
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You Win!";
  }
  if (userChoice === computerChoice) {
    return "Its a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You Win!";
    } else {
      return "The computer won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You Win!";
    } else {
      return "The computer won";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You Win!";
    }
  } else {
    return "the computer won";
  }
};

const playGame = () => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();

  console.log("You threw " + userChoice);
  console.log("The computer threw " + computerChoice);
  return determineWinner(userChoice, computerChoice);
};

console.log(playGame());

console.log(userInput());

function userInput() {
userInput = document.querySelector('#userInput').value;
computerChoice = document.querySelector('#computerResponse');
winner = document.querySelector('#winner');
playGame();

}