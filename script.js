let playerCount=0;
let computerCount=0;
  

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


function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection){ 
        console.log( "Tie! Both played " + playerSelection.substring(0,1).toUpperCase() + 
                playerSelection.substring(1));
        return "tie";
    } else if ( 
        (playerSelection.toLowerCase() == 'rock' && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == 'paper' && computerSelection == "rock") ||
        (playerSelection.toLowerCase() == 'scissors' && computerSelection == "paper")) {
        console.log( "You Win! " + playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1) + 
                " beats " + computerSelection.substring(0,1).toUpperCase() + computerSelection.substring(1) + ".");
        return "win";
    } else {
        console.log( "You Lose! " + computerSelection.substring(0,1).toUpperCase() + computerSelection.substring(1) + 
                " beats " + playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1) + ".");
        return "lose";
    }
}

function game(){
    
    for (i=0; i<5; i++){
       const computerSelection = computerPlay();
       const playerSelection = prompt("Rock, Paper, or Scissors", "Rock");
       let outcome = playRound(playerSelection, computerSelection) ;
       if (outcome == "win"){
           playerCount = playerCount + 1;
       } else if (outcome == "lose"){
           computerCount = computerCount + 1;
       } 
    }
    if(playerCount>computerCount){
        console.log( "Player wins the game " + playerCount + " to " + computerCount + "!");
    } else if (computerCount>playerCount){
       console.log( "Computer wins the game " + computerCount + " to " + playerCount + "!");
    } else {
        console.log( "It's a Tie: " + computerCount + " to " + playerCount + "...");
    }
}


game();