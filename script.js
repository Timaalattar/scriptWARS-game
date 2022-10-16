//creating the fuctions that start the game.
// - players click on start game 
// - instruction text is to disappear 
// - "player 1 plays text to load"
// - first question to appear 
// - input box for text is to appear 
// - submit method to appear 

//creating an object array with the questions and answers, the purpose is to have a database of questions that can get randomized to keep score. 

let questionsAndAnswers = [
    {
      question: 'name the data types for true and false values ',
      answer: 'boolean'
    },
    {
      question: 'name the data types for variables that are only declared and not defined or initialized',
      answer: 'undefined'
    },
    {
      question: 'name the data types for integer and floating-point numbers',
      answer: 'number'
    },
    {
      question: 'name the data types for characters and alphanumeric values',
      answer: 'string'
    },
    {
      question: 'name the data types for collections or complex values',
      answer: 'object'
    },

    {
      question: 'name the data types for unique identifier for objects',
      answer: 'symbols'
    },
    {
      question: 'Built-in methods in javaScript that returns the present data and time',
      answer: 'date'
    },
    {
      question: 'Built-in methods in javaScript that adds an item to an array',
      answer: 'push'
    },
    {
      question: 'Built-in methods in javaScript that removes and also returns the last element of an array',
      answer: 'pop'
    },
    {
      question: 'Built-in methods in javaScript that returns the length of a string',
      answer: 'length'
    },
  ] 

  let randomQuestion
  
  function randomize(arr){
    randomQuestion = Math.floor(Math.random() * arr.length)
    document.getElementById("game-text").innerText = questionsAndAnswers[randomQuestion].question;
    document.getElementById("game-text").style.paddingLeft = '75px';
  }

//creating a function that randomizes the questions in the array, doing it in the form of a function because we need to use it when the start game button is clicked and when the submit button is clicked

    //click game start button 

    let buttonStart = document.getElementById('button-start')
    buttonStart.addEventListener('click', myFunction_start)

function myFunction_start() {
    randomize(questionsAndAnswers)
    document.getElementById("button-start").style.display = 'none'; 
    document.getElementById("game-start").style.display = 'flex'; 
    document.getElementById("game-start").style.justifyContent = 'center';
    document.getElementById("instruction-text").innerText = 'Player 1 turn'; 
    document.getElementById("instructions").style.display = 'none';    
  } 
// next I need to code the game function after the loading/starting the game
// - after questions appears it is player 1's turn to start they have to be able to type the answer in the input box and press submit
// - if the question is right then player's score is to be updated with 1 point
// - if the question is wrong then the turn needs to move to player 2 
// - if player 2 answers the question correctly then their score has to be updated and then they go again for their turn 
// if the answer is wrong then we have to show the question and have a button to click to for the next question, but it will still be player 2 turn


//simplifying the function and making it one answer and gets point and moves on defining variables 
let playerOneturn = true
let playerTwoturn = false
let playerOneScore = 0 
let playerTwoScore = 0


//select submit button
let submitBtn = document.getElementById('button-submit')
submitBtn.addEventListener("click", checkInput)
function updateScore() {
    if(playerOneturn){
        playerOneScore++
        document.getElementById("player1-score").innerText = playerOneScore;  
    } else {
        playerTwoScore++
        document.getElementById("player2-score").innerText = playerTwoScore;  
    }
}

function checkInput(taco){
    let userAnswer = document.querySelector('#answer').value
    let correctAnswer = questionsAndAnswers[randomQuestion].answer
    if (userAnswer === correctAnswer) {
        console.log('correct!')
        updateScore()
    }
    changeTurn()
}

function changeTurn(){
    playerOneturn = !playerOneturn
    playerTwoturn = !playerTwoturn
    if(playerOneturn){
        document.getElementById("instruction-text").innerText = 'Player 1 turn';
        document.getElementById('answer').value = '';
    } else {
        document.getElementById("instruction-text").innerText = 'Player 2 turn';
        document.getElementById('answer').value = '';
    }
    randomize(questionsAndAnswers)
}

//if condition to check score and annouce winner 

let playerScore= document.getElementById('button-submit')
playerScore.addEventListener("click", checkScore)
function checkScore() {
     if(playerOneScore>=5){
     document.getElementById("instruction-text").innerText = 'Player one wins';
     document.getElementById("game-start").style.display = 'none';
     document.getElementById("game-text").style.display = 'none';

     } else if(playerTwoScore>=5) {
        document.getElementById("instruction-text").innerText = 'Player Two wins';
        document.getElementById("game-start").style.display = 'none';
        document.getElementById("game-text").style.display = 'none';
        }
}

//Reset button - my failed attempt

// let resetButton = document.getElementById('button-restart')
// resetButton.addEventListener("click", restartGame)
// function restartGame() {   
//     document.getElementById('player1-score').value = '';
//     document.getElementById('player2-score').value = '';
// }

//Reset button - alex suggestion 

const resetButton = document.getElementById('button-restart');
resetButton.addEventListener('click', resetGame);

function resetGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    document.getElementById('player1-score').innerText = playerOneScore;
    document.getElementById('player2-score').innerText = playerTwoScore;
    document.getElementById("button-start").style.display = 'flex';
    document.getElementById("game-start").style.display = 'none';
    document.getElementById("game-text").innerText = ''; 
}





