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
    console.log(questionsAndAnswers[randomQuestion]) 
    console.log(questionsAndAnswers) 
    console.log(randomQuestion) 
    document.getElementById("game-text").innerHTML = questionsAndAnswers[randomQuestion].question;
}