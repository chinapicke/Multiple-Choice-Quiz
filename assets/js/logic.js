// Link button in HTML to JSS so that the quiz starts once the button has been pressed, the first question will appear

// This accesses the start id within HTML 
let startBtn = document.getElementById("start")
// This accss the h1 and p tag within the startscreen div within HTML 
let startScreen = document.getElementById("start-screen")
// This accesses the question containers
let questionContainer = document.getElementById('questions')
// This accesses the start id within HTML 
let timerEl = document.getElementById("time")
// This accesses the question title within the HTML 
let questionTitle = document.getElementById("question-title")
// This accesses the choices within the HTML 
// Unsure what array.from is (need to research)
let choice1 = document.getElementById('choice-1')
let choice2 = document.getElementById('choice-2')
let choice3 = document.getElementById('choice-3')
let choice4 = document.getElementById('choice-4')
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
    firstQuestion()
}

// Function to start displaying the first question and the choices within it 
function firstQuestion() {
    // QuestionedAskedIndex is used to select which question we want to show, by following it with question key value pair in quizData array 
    questionTitle.textContent = quizData[questionAskedIndex].question;
    // This same method is used to show the relative choices within the question
    choice1.textContent = quizData[questionAskedIndex].a;
    choice2.textContent = quizData[questionAskedIndex].b;
    choice3.textContent = quizData[questionAskedIndex].c;
    choice4.textContent = quizData[questionAskedIndex].d;

    if ()
} 


// // to check that the questions from question.js are being accessed
// console.log(quizData)

// Function to displayquestion
// function displayQuestion(){
//     for (var i = 0; i < quizData.length;i++){
// }


// For loop to loop through each quizData question
// for (var i = 0; i < quizData.length;i++){
//     let questionWriting = quizData[i]
//     questionOnly = questionWriting.question
//     console.log(questionOnly)
//     questionTitle.textContent = questionOnly
// }


