// 1. Get user's choice.
// USER: Rock 0; Paper 1; Scissors 2;
// COMPUTER: Rock 0; Paper 1; Scissors 2;
 
  const choices = ['rock', 'paper', 'scissors'];
  const userChoice = Math.floor(Math.random(choices) * 3);
  console.log(userChoice);
 
  const computerChoice = Math.floor(Math.random(choices) * 3);
  console.log(computerChoice);
 
function declareWinner(){
  if (userChoice === computerChoice){
    console.log('No one won! It\'s a tie!');
  } else if (userChoice === 0 && computerChoice === 2){
    console.log('You won! Rock beats scissors!');
  } else if (userChoice === 1 && computerChoice === 0){
    console.log('You won! Paper beats rock!');
  } else if (userChoice === 2 && computerChoice === 1){
    console.log('You won! Scissors beats paper!');
  } else {
    console.log('You lost, try again!');
  }
}
declareWinner();
