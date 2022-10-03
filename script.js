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
    document.getElementById("game-text").innerHTML = questionsAndAnswers[randomQuestion].question;
}

// next I need to code the game function after the loading/starting the game
// - after questions appears it is player 1's turn to start they have to be able to type the answer in the input box and press submit
// - if the question is right then player's score is to be updated with 1 point
// - if the question is wrong then the turn needs to move to player 2 
// - if player 2 answers the question correctly then their score has to be updated and then they go again for their turn 
// if the answer is wrong then we have to show the question and have a button to click to for the next question, but it will still be player 2 turn

let userAnswer = document.querySelector('answers').addEventListener('input', answerQuestion)

function answerQuestion(event) {
  let answer = questionsAndAnswers[randomQuestion].answer
  let playerOneScore = 0 
  let playerTwoScore = 0
  if (userAnswer == answer) {
    function myFunction_player() {
        document.getElementById("player1-score").innerHTML = playerOneScore + 1; 
        document.getElementById("new-question").style.display = 'flex'; 
        document.getElementById("new-question").style.justifyContent = 'center';
  } else {
    if (userAnswer !== answer) {
        function myFunction_nextplayer() {
            document.getElementById("player1-score").innerHTML = 'Player 1 turn'; 
  }
  }
}