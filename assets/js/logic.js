// Link button in HTML to JSS so that the quiz starts once the button has been pressed, the first question will appear

// This accesses the start id within HTML 
let startBtn = document.getElementById("start")
// This accss the h1 and p tag within the startscreen div within HTML 
let startScreen =document.getElementById("start-screen")
// This accesses the question containers
let questionContainer = document.getElementById('questions')
// This accesses the start id within HTML 
let timerEl = document.getElementById("time")

// This accesses the question title within the HTML 
let questionTitle = document.getElementById("question-title")
// This accesses the choices within the HTML 
let choiceOne = document.getElementById("choice-1")
let choiceTwo = document.getElementById("choice-2")
let choiceThree= document.getElementById("choice-3")
let choiceFour = document.getElementById("choice-4")
// This accesses the final score within the HTML 
let finalScore = document.getElementById("final-score")
// This accesses the initials within the HTML
let initialsEl = document.getElementById("initials")
// This accesses the ol of highscores within the highscore HTML 
let highScoreList = document.getElementById("highscores")


//enable score to be added dependent if the answer is correct or not 
let score = 0
// create variable to set starting time to 60 seconds 
let timeLeft = 60




// Buttons 
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
multipleQuestions()
}


function multipleQuestions(question){
    // Need to input object of questions
    questionTitle.textContent = question.question-title
}