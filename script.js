// const playerScoreDiv = document.getElementById('player-score');
// const handsDiv = document.getElementById('hands');
// const result = document.getElementById('result');
// const endGameButtonDiv = document.getElementById('endGameButton');

// const totalScores ={computeScore: 0, playerScore: 0}

function getComputerChoice() {
  let rpsChoice = ['Rock','Paper','Scissors'];
  let computerChoice = rpsChoice[Math.floor(Math.random() *3)];
  return computerChoice;
}
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // All situations where human draws, set `score` to 0
  if(playerChoice === computerChoice){
    score = 0;
    // All situations where human wins, set `score` to 1
  }else if(playerChoice === 'Rock' && computerChoice ==='Scissors'){
    score = 1;
  }else if(playerChoice === 'Paper' && computerChoice ==='Rock'){
    score = 1;
  }else if(playerChoice === 'Scissors' && computerChoice ==='Paper'){
    score = 1;
  }else{
    // Otherwise human loses (aka set score to -1)
    score = -1;
  }
    return score;
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    let result = document.getElementById('result');
    switch(score){
        case -1:
            result.innerText = 'You Lose!'
            break;
        case 0:
            result.innerText = `It's a Draw!`
            break;
        case 1:
            result.innerText = `You Win!`
            break;
    }
    let playerScore = document.getElementById('player-score');
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText)+ score}`;
    hands.innerText = `👩${playerChoice} Vs 🤖${computerChoice}`;

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value,computerChoice);
  showResult(score,playerChoice.value,computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
    let rpsButtons = document.querySelectorAll('.rpsButton');
    rpsButtons.forEach (rpsButton =>{
        rpsButton.onclick = () =>onClickRPS(rpsButton)
    })

    let endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick =() => endGame()

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    let playerScore = document.getElementById('player-score');
    let hands = document.getElementById('hands')
    let result = document.getElementById('result');
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()