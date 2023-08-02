

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
console.log(userInput());
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
