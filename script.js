const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

function getUserChoice () {
  const USER = prompt("Rock, Paper, Scissors...!!!").toLowerCase();
  const PLAYER_CHOICE = USER.charAt(0).toUpperCase() + USER.slice(1)
  return PLAYER_CHOICE;
}

function playRound(user , computer) {
  if (user === computer) {
    return "It was a tie!"
  } else if((user === "Rock") && (computer == "Scissors") ||
    (user === "Scissors") && (computer == "Paper") ||
    (user === "Paper") && (computer == "Rock")) {
      return `You Win! ${user} beats ${computer}`
  } else {
    return `You Lose! ${computer} beats ${user}`
  }
}

function playGame() {
  let computerScore = 0;
  let userScore = 0;
  
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`)
    let gameResult = playRound(getUserChoice(), getComputerChoice());
    console.log(gameResult)
    if (gameResult.includes("Win")) {
      userScore++
    } else if (gameResult.includes("Lose")) {
      computerScore++
    }
  }

  if (userScore === computerScore) {
    console.log( "It was a tie!!" )
  } else if (userScore > computerScore) {
    console.log( `You Win!!! with a score of ${userScore} vs ${computerScore}` )
  } else {
    console.log( `You Lose!!! with a score of ${userScore} vs ${computerScore}` )
  }

  let again = prompt("Do you want to play again??? ")
  if (again.toLowerCase() === "yes") {
    playGame()  
  } else {
    return "Goodbye!! I think was a good game, see you later"
  }
}

console.log("Welcome to Rock-Paper-Scissors")
console.log("If you want to play, write playGame() and enter")