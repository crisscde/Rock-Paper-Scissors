const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
  return CHOICES[Math.floor(Math.random() * 3)]
}

function getUserChoice () {
  const USER = prompt("Rock, Paper, Scissors...!!!")
  const PLAYER_CHOICE = USER.slice(0, 1).toUpperCase()
    .concat(USER.slice(1).toLowerCase());
  return PLAYER_CHOICE;
}

function playRound(user , computer) {
  if (user === computer) {
    return "It was a tie!"
  } else if((user === "Rock") && (computer == "Scissors")) {
    return `You Win! ${user} beats ${computer}`
  } else if((user === "Scissors") && (computer == "Paper")) {
    return `You Win! ${user} beats ${computer}`
  } else if((user === "Paper") && (computer == "Rock")) {
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
    let game = playRound(getUserChoice(), getComputerChoice());
    let winner = game.slice(4, 8);
    console.log(game)
    if (winner === "Win!") {
      userScore += 1
    } else if (winner === "Lose") {
      computerScore += 1
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