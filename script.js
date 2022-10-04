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
      question: 'What is my name',
      answer: 'Tima'
    },
    {
      question: 'What is my age',
      answer: '33'
    },
    {
      question: 'what is my favorite color',
      answer: 'orange'
    },
    {
      question: 'What is my favorite food',
      answer: 'sushi'
    },
    {
      question: 'What is my favorite number',
      answer: '10'
    },
  ] 

  let randomQuestion
  
  function randomize(){
    randomQuestion = Math.floor(Math.random() * Array.length)
    document.getElementById("game-text").innerHTML = questionsAndAnswers[randomQuestion].question;
  }

//creating a function that randomizes the questions in the array, doing it in the form of a function because we need to use it when the start game button is clicked and when the submit button is clicked

    //click game start button 

    let buttonStart = document.getElementById('button-start')
    buttonStart.addEventListener('click', myFunction_start)

function myFunction_start() {
    randomize()
    document.getElementById("button-start").style.display = 'none'; 
    document.getElementById("game-start").style.display = 'flex'; 
    document.getElementById("game-start").style.justifyContent = 'center';
    document.getElementById("instruction-text").innerHTML = 'Player 1 turn'; 
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
    } else {
        document.getElementById("instruction-text").innerText = 'Player 2 turn';
    }
    randomize()
}


// //fuction for player one when question is correct

// //function to define what the correct answer should be 
// .addEventListener('input', answerQuestion)

// function answerQuestion(event) {
// }




// //function for player two when question is correct 
// function playerTwocorrect() {
//     randomize()
//     document.getElementById("player1-score").innerHTML = playerOneScore + 1;  
//     document.getElementById("instruction-text").innerHTML = 'Player 2 turn'; 
//     document.getElementById("game-text").innerHTML = questionsAndAnswers[randomQuestion].question;
// }





