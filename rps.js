function playGame(playerMove) {
    const cMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
  switch(cMove) {
    case 'rock':
      result = 'You Lose';
      break;

    case 'paper':
      result = 'You Win';
      break;
    
    case 'scissors':
      result = 'Tie';
      break;
    }
    
  } else if (playerMove === 'paper')
  {
  switch(cMove) {
  case 'rock':
    result = 'You win';
    break;

  case 'paper':
    result = 'Tie';
    break;

  case 'scissors':
    result = 'You Lose';
    break;
  } 

} else if (playerMove === 'rock') {
  switch(cMove) {
  case 'rock':
    result = 'Tie';
    break;

  case 'paper':
    result = 'You Lose';
    break;

  case 'scissors':
    result = 'You Win';
    break;
}
}
     alert(`You picked ${playerMove}! The computer picked ${cMove}! ${result}`);
  }
    // caclcautes moves for computer here

    function pickComputerMove() {
      let cMove = '';
      const comp = Math.random();
    if (comp >= 0 && comp < 1/3) {
    cMove = 'rock';
    } else if (comp >= 1/3 && comp < 2/3)
    {
      cMove = 'paper';
    } else if (comp >= 2/3 && comp < 1) {
      cMove = 'scissors';
    }
    return cMove;
  }