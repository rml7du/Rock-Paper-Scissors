let playerScore=0;
let computerScore=0;

const outcome = document.querySelector('#outcome');
const content = document.createElement('div');

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


function playRound(playerSelection){
  const computerSelection = computerPlay();
  
  
  
  if (playerSelection == computerSelection){ 
        
        content.textContent = "Tie! Both played " + playerSelection.substring(0,1).toUpperCase() + 
               playerSelection.substring(1);
        outcome.appendChild(content);
      return "tie";
  } else if ( 
      (playerSelection == 'rock' && computerSelection == "scissors") ||
      (playerSelection == 'paper' && computerSelection == "rock") ||
      (playerSelection == 'scissors' && computerSelection == "paper")) {
      
        content.textContent = "You Win! " + playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1) + 
                          " beats " + computerSelection.substring(0,1).toUpperCase() + computerSelection.substring(1) + ".";
        outcome.appendChild(content);
      return "win";
  } else {
      content.textContent = "You Lose! " + computerSelection.substring(0,1).toUpperCase() + computerSelection.substring(1) + 
              " beats " + playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1) + ".";
      outcome.appendChild(content);
    return "lose";
  }
}

if (playerScore == 0 && computerScore == 0){

}


      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => { 
          playRound(button.id);
        });
      });
      
      
      
