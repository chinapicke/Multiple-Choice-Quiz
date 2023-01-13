// Link button in HTML to JSS so that the quiz starts once the button has been pressed, the first question will appear

// This accesses the start id within HTML 
let startBtn = document.getElementById("start")
// This accss the h1 and p tag within the startscreen div within HTML 
let startScreen = document.getElementById("start-screen")
// This accesses the question containers
let questionContainer = document.getElementById('questions')
// This accesses the start id within HTML 
let timeEl = document.getElementById("time")
// This accesses the question title within the HTML 
let questionTitle = document.getElementById("question-title")
// This accesses the choices within the HTML 
// Unsure what array.from is (need to research)
let choiceOne = document.getElementById('choice-1')
let choiceTwo = document.getElementById('choice-2')
let choiceThree = document.getElementById('choice-3')
let choiceFour = document.getElementById('choice-4')
// This accesses the final score within the HTML 
let finalScore = document.getElementById("final-score")
// This accesses the initials within the HTML
let initialsEl = document.getElementById("initials")
// This accesses the ol of highscores within the highscore HTML 
let highScoreList = document.getElementById("highscores")


//enable score to be added dependent if the answer is correct or not 
let score = 0

// This will be used when rendeing question and choices onto the page, this number will then be incremented to show the next questions with the relative choices
let questionAskedIndex = 0



// When start button is clicked by user, then it will render the startGame() function 
startBtn.addEventListener("click", startGame)

function startGame() {
    // To check that the button is functioning properly
    //     console.log("Game has been started")
    // Hide start button when it is clicked on so that the questions can be shown on the page 
    startBtn.classList.add('hide')
    // This also hides the start screen writing
    startScreen.classList.add('hide')
    // This shows the hidden questions
    questionContainer.classList.remove('hide')
    currentQuestion()
}

// create variable to set starting time to 60 seconds 
let secondsLeft = 60
// function to countdown the time from 60 seconds
function countDown(){
// Followed steps from activity in Lesson 1 re: clock counting down
var timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent= secondsLeft;

    if(secondsLeft === 0){
        // Stops exection of setInterval
        clearInterval(timerInterval )
    }
},1000)
}

countDown()







// Function to start displaying the first question and the choices within it 
function currentQuestion() {
    // QuestionedAskedIndex is used to select which question we want to show, by following it with question key value pair in quizData array 
    var stringQuestion = JSON.stringify(quizData[questionAskedIndex].question)
    questionTitle.textContent = stringQuestion
    // This same method is used to show the relative choices within the question
    choiceOne.textContent = quizData[questionAskedIndex].a;
    choiceTwo.textContent = quizData[questionAskedIndex].b;
    choiceThree.textContent = quizData[questionAskedIndex].c;
    choiceFour.textContent = quizData[questionAskedIndex].d;
}

// Function occurs if user clicks on the first choice in the MCQ choices
choiceOne.addEventListener("click", function () {
// If the user clicked on choice One and it equals the correct answer, console log correct
    if (this.textContent === (quizData[questionAskedIndex].correct)) {
      console.log("correct");
      //show correct on result
    } else {
      console.log("incorrect");
      //show result incorrect 
    //   counter = counter - 10;
    }
    quizData++;
    if (quizData === quizData .length) {
      endGame();
    } else {
      currentQuestion();
    }
});
  
