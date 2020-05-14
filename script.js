let playerScore=0;
let computerScore=0;

const outcome = document.querySelector('#outcome');
const content = document.createElement('span');

const player = document.querySelector('#player');
const playerContent = document.createElement('span');

const computer = document.querySelector('#computer');
const computerContent = document.createElement('span');

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


function playRound(playerSelection, playerScore, computerScore){
  const computerSelection = computerPlay();
  
  if (playerSelection == computerSelection){   
        content.textContent = "Tie! Both played " + playerSelection.substring(0,1).toUpperCase() + 
               playerSelection.substring(1);
        outcome.appendChild(content);
      return;
  } else if ( 
      (playerSelection == 'rock' && computerSelection == "scissors") ||
      (playerSelection == 'paper' && computerSelection == "rock") ||
      (playerSelection == 'scissors' && computerSelection == "paper")) {
        
        playerScore++;
        content.textContent = "You Win! " + playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1) + 
                          " beats " + computerSelection.substring(0,1).toUpperCase() + computerSelection.substring(1) + ".";
        outcome.appendChild(content);

        playerContent.textContent = playerScore;
        player.appendChild(playerContent);
      return;
  } else {
      content.textContent = "You Lose! " + computerSelection.substring(0,1).toUpperCase() + computerSelection.substring(1) + 
              " beats " + playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1) + ".";
      outcome.appendChild(content);
    return computerScore++;
  }
}




      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => { 
          playRound(button.id, playerScore, computerScore);
        });
      });
      
      if (playerScore == 5) {
        content.textContent = "You Win! " + playerScore + "to " + computerScore;
        outcome.appendChild(content);
      }
      
      
