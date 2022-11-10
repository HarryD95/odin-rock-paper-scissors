// JavaScript

// variables
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');


// computer choice function
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true;
  })
}

// play a single round function
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";

    // if both select the same
    if (computerSelection == playerSelection) {
        result = ('It\s a tie! Both players choose: ' + playerSelection
        + '<br><br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore)
    }


    // if computer beats player
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) 
    {
        computerScore+=1;
        result = ('Your opponent wins this round! ' + computerSelection + ' beats ' + playerSelection
        + '<br><br> Player score: ' + playerScore + '<br>Computer score: ' + computerScore)

        if (computerScore == 5) {
          result += '<br><br>You lose the game!' + '<br>Reload to try again!'
          disableButtons();
        }
    }


    // if player beats computer
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore+=1;
        result = ('You win this round! ' + playerSelection + ' beats ' + computerSelection
        + "<br><br>Player Score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
          result += '<br><br>You win the game!' + '<br>Reload to continue!'
          disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result;
    return
}

buttons.forEach(button => {
  button.addEventListener('click', function(){
    playRound(button.value)
  })
})
