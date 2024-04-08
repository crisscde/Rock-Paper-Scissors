const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
  return CHOICES[Math.floor(Math.random() * 3)]
}


function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.slice(0, 1).toUpperCase()
    .concat(playerSelection.slice(1).toLowerCase())
  if (playerChoice === computerSelection) {
    return "It was a tie!"
  } else if((playerChoice === "Rock") && (computerSelection == "Scissors")) {
    return `You win! ${playerChoice} beats ${computerSelection}`
  } else if((playerChoice === "Scissors") && (computerSelection == "Paper")) {
    return `You win! ${playerChoice} beats ${computerSelection}`
  } else if((playerChoice === "Paper") && (computerSelection == "Rock")) {
    return `You win! ${playerChoice} beats ${computerSelection}`
  } else {
    return `You Lose! ${computerSelection} beats ${playerChoice}`
  }
}