

function playRound(playerSelection, computerSelection) {
        
        let result = '';
        let playerSelection = userInput();
        let computerSelection = getComputerChoice();
    
        if (playerSelection === 'rock') {
        
        switch(computerSelection) {
            
            case 'rock':
            result = 'You Tied';
            break;

            case 'paper':
            result = 'You lose';
            break;
            
            case 'scissors':
            result = 'You Win';
            break;

        } 
    } else if (playerSelection === 'paper') {
        
        switch(computerSelection) {
            
            case 'rock':
            result ='You Win';
            break;

            case 'paper':
            result ='You Tied';
            break;
            
            case 'scissors':
            result ='You Lose';
            break;
        }
  
 
}   else if (playerSelection === 'scissors') {
        
    switch(computerSelection) {
        
        case 'rock':
        result ='You Lose';
        break;

        case 'paper':
        result ='You Win';
        break;
        
        case 'scissors':
        result ='You Tied';
        break;
    }
    console.log (`You picked ${playerSelection} and the Comptuer picked ${computerSelection}. ${result}`);
    
}
function userInput () {
    let playerSelection = '';
    let playerPrompt = prompt("Please enter your choice");
    playerPrompt = playerPrompt.toLowerCase();

    if (playerPrompt === 'rock') {
        playerSelection = 'rock';
    } else if (playerPrompt === 'paper') {
        playerSelection = 'paper'
    } else if (playerPrompt === 'scissors') {
        playerSelection = 'scissors'
    }
    return playerSelection;
}
function getComputerChoice () {
    let computerMove = '';
    let computerPick = Math.random();
    if (computerPick >= 0 && computerPick < 1/3) {
        computerMove = 'rock';
    } else if (computerPick >= 1/3 && computerPick < 2/3) {
        computerMove = 'paper';
    } else if (computerPick >= 2/3 && computerPick < 1) {
        computerMove = 'scissors';
    }
    return computerMove;


}
console.log(playRound(playerSelection, computerSelection);)
}
