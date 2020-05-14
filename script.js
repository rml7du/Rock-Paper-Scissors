let playerScore = 0;
let computerScore = 0;

const outcome = document.querySelector('#outcome');


// Computer Selection Function
function computerPlay(){
  let rps = Math.floor(Math.random()*3);
  let play;
  if (rps == 0) {
      play = "rock";
  } else if (rps == 1) {
      play = "paper";
  } else {
      play = "scissors";
  }
  return play;
}

// playRound function to compare human vs comp play and display results.
function playRound(playerSelection){
  const computerSelection = computerPlay();
  
  if (playerSelection == computerSelection){   
        outcome.textContent = "Tie! Both played " + playerSelection.substring(0,1).toUpperCase() + 
               playerSelection.substring(1);
      return;
  } else if ( 
      (playerSelection == 'rock' && computerSelection == "scissors") ||
      (playerSelection == 'paper' && computerSelection == "rock") ||
      (playerSelection == 'scissors' && computerSelection == "paper")) {
        
        outcome.textContent = "You Win! " + playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1) + 
                          " beats " + computerSelection.substring(0,1).toUpperCase() + computerSelection.substring(1) + ".";
        playerScore++;
        updateScore();
        checkWinner();
      return ;
  } else {
      outcome.textContent = "You Lose! " + computerSelection.substring(0,1).toUpperCase() + computerSelection.substring(1) + 
              " beats " + playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1) + ".";
      computerScore++;
      updateScore();
      checkWinner();
    return;
  }
}

//updates score.
const updateScore = () => {
  const pScore = document.querySelector("#player");
  const cScore = document.querySelector("#computer");
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
  
};


function checkWinner(){
  if (playerScore == 5){
    outcome.textContent = "You Win " + playerScore + " to " + computerScore;
    playerScore = 0;
    computerScore = 0;
      } else if (computerScore == 5){
        outcome.textContent = "You Lose " + computerScore + " to " + playerScore;
        playerScore = 0;
        computerScore = 0;
  } else return;
}


      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => { 
          playRound(button.id, playerScore, computerScore);
        });      
      });
      
    
      
      
