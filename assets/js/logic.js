// -------------DOM selectors------------------
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
// This accesses all the information on the end screen in the HTML 
let endOfGame = document.getElementById("end-screen")
// This access the submit button on the end screen in the HTML
let submitBtn = document.getElementById("submit")
// This accesses the leaderboard within highscores HTML 
let leaderBoard = document.getElementById("leaderboard")
// This accesses the feedback if each question is right or wrong
let feedback = document.getElementById("feedback")


//enable score to be added dependent if the answer is correct or not 
let score = 0
// This will be used when rendeing question and choices onto the page, this number will then be incremented to show the next questions with the relative choices
var questionAskedIndex = 0



// ------------Starting the game------------------
function startGame() {
    // To check that the button is functioning properly
    //     console.log("Game has been started")
    // Hide start button when it is clicked on so that the questions can be shown on the page 
    startBtn.classList.add('hide')
    // This also hides the start screen writing
    startScreen.classList.add('hide')
    // This shows the hidden questions
    questionContainer.classList.remove('hide')
    showQuestions()
}
// When start button is clicked by user, then it will render the startGame() function 
startBtn.addEventListener("click", startGame)




// -----------Countdown timer------------------
// create variable to set starting time to 60 seconds 
let secondsLeft = 90
// function to countdown the time from 60 seconds
function countDown() {
    // Followed steps from activity in Lesson 1 re: clock counting down
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops exection of setInterval
            clearInterval(timerInterval)
            // This ends the game and sends user to the page where they need to input initials
            endGame()
        }
    }, 1000)
}
// Starts the countdown when start button is clicked
// If you do not have this then the timer will start to count down as soon as the page is opened/loaded
startBtn.addEventListener("click", countDown);




// ----------Question being asked and the choices----------
// This shows the first question in the quizData array 
// console.log(quizData[0].question)
function showQuestions() {
    // QuestionedAskedIndex is used to select which question we want to show, by following it with question key value pair in quizData array 
    // This same method is used to show the relative choices within the question
    questionTitle.innerHTML = quizData[questionAskedIndex].question
    choiceOne.innerHTML = quizData[questionAskedIndex].a;
    choiceTwo.innerHTML = quizData[questionAskedIndex].b;
    choiceThree.innerHTML = quizData[questionAskedIndex].c;
    choiceFour.innerHTML = quizData[questionAskedIndex].d;
}
// Function to start displaying the first question and the choices within it 
// Function occurs if user clicks on the first choice in the MCQ choices
choiceOne.addEventListener("click", function () {
    // If the user clicked on choice One and it equals the correct answer, console log correct
    if (this.textContent === (quizData[questionAskedIndex].correct)) {
        console.log("correct");
        score += 5
        // This shows the user at the bottom of the page if the answer is correct or incorrect
        feedback.textContent = "Correct"
        feedback.classList.remove('hide')
        //show correct on result
    } else {
        console.log("incorrect");
        //show result incorrect 
        // Subtracts 10 seconds when user chooses an incorrect choice 
        secondsLeft -= 10
        feedback.textContent = "Wrong"
        feedback.classList.remove('hide')


    }
    // This loops through each question and choice set within quizData
    questionAskedIndex++;
    // If statement that if there are no more quiz questions or timeleft is 0 then end the game and send user to end screen 
    if (questionAskedIndex === quizData.length)
    // if (questionAskedIndex === quizData.length || secondsLeft === 0)
    {
        endGame();
    } else {
        showQuestions();
    }
});

// Created the same as choiceOne for the other choices; this enables user input to be consoled as correct or incorrect
choiceTwo.addEventListener("click", function () {
    // If the user clicked on choice One and it equals the correct answer, console log correct
    if (this.textContent === (quizData[questionAskedIndex].correct)) {
        console.log("correct");
        score += 5
        feedback.textContent = "Correct"
        feedback.classList.remove('hide')


        //show correct on result
    } else {
        console.log("incorrect");
        secondsLeft -= 10
        feedback.textContent = "Wrong"
        feedback.classList.remove('hide')


    }
        //show result incorrect 
        questionAskedIndex++;
        if (questionAskedIndex === quizData.length) {
            endGame();
        } else {
            showQuestions();
        }
    
})

choiceThree.addEventListener("click", function () {
    // If the user clicked on choice One and it equals the correct answer, console log correct
    if (this.textContent === (quizData[questionAskedIndex].correct)) {
        console.log("correct");
        score += 5
        feedback.textContent = "Correct"
        feedback.classList.remove('hide')


        //show correct on result
    } else {
        console.log("incorrect");
        secondsLeft -= 10}
        feedback.textContent = "Wrong"
        feedback.classList.remove('hide')


        //show result incorrect 
        questionAskedIndex++;
        if (questionAskedIndex === quizData.length) {
            endGame();
        } else {
            showQuestions();
        }
    
})

choiceFour.addEventListener("click", function () {
    // If the user clicked on choice One and it equals the correct answer, console log correct
    if (this.textContent === (quizData[questionAskedIndex].correct)) {
        console.log("correct");
        score += 5
        feedback.textContent = "Correct"
        feedback.classList.remove('hide')


        //show correct on result
    } else {
        console.log("incorrect");
        secondsLeft -= 10}
        feedback.textContent = "Wrong"
        feedback.classList.remove('hide')


        //show result incorrect 
        questionAskedIndex++;
        if (questionAskedIndex === quizData.length) {
            endGame();
        } else {
            showQuestions();
        }
    
})




// ------------End of the game -------------
function endGame() {
    // Hides questions and the choices 
    questionContainer.classList.add('hide')
    // Removes the hidden class for the end-screen div 
    endOfGame.classList.remove('hide')
    // Hides the feedback 
    feedback.classList.add('hide')
    // Sets timer to 0 to stop timer 
    timeEl = 0
    // Renders players score onto the page 
    finalScore.textContent = score + "/30"
    // Submit buttons is clicked then saveInfo function is run
    submitBtn.addEventListener('click', saveInfo)
}

// Create empty variable to push the users initials and score into 
var highScores = JSON.parse(localStorage.getItem("highScores")) || []

// --------- SAVING USER INFORMATION FOR SCOREBOARD-----
function saveInfo(event){
    // This stops the form being sent so that it can be saved to local storage
    // This also prevents form from reloading the page 
event.preventDefault()
// Check that the input is not empty
if (!initialsEl.value ) {
    alert("Please input your initials before clicking the submit button")
    return;
}
// Storing the users initials and score 
let hsInitials = initialsEl.value
let hsScore = finalScore.innerText
// Pushing the saved user initials and score into the empty array of highscores, which can be updated when new users play the game
highScores.push({Initials: hsInitials, Score:hsScore})
// adds the info from the user into the array
localStorage.setItem("highScores", JSON.stringify(highScores))
// displayHighScores()
// This directs the user to the page of highscores so they can see where they are on the leaderboard 
window.location.href = "https://chinapicke.github.io/Multiple-Choice-Quiz/highscores.html"

}


// -----------CHECKING USER INPUT AGAINST HIGHSCORE DATABASE-------
// Function to check local storage for high scores
function getHighScores(){
    // Converts string items into an object so that the user initials and score can be showed as an object 
    let savedHighScores = JSON.parse(localStorage.getItem("highScores"))
// if statement, if highscores is in savedHigh then it will run the displayhigh score function or push the object into highscores array
    if (savedHighScores) {
        highScores = savedHighScores;
        displayHighScores()
      } else {
        highScores = [];
      }
}
// --------FUNCTION TO PRINT THE SCORES ONTO THE PAGE AND ADD NEW LI ELEMENT----
function displayHighScores() {
    // Sort highscores in order with the function of sortScores
    highScores.sort(sortScores)
    // For each new initial and score input, create li element to be put in the ol of highscores
    // for (let i = 0; i < highScores.length; i++) {
    //   let li = document.createElement("li");
    // //   This prints the score and initials of each new created li element onto the webpage
    //   li.innerHTML = `Initials: ${highScores[i].Initials} Score: ${highScores[i].Score}`;
    // //   Adds the newly created li element to the highscores list 
    //   highScoreList.append(li);
    // }
   }

// -----FUNCTION TO SORT SCORES FROM HIGH TO LOW------
// function sortScores (a,b){
//     // Assigned scores into variables so that they can be compared in if/else statement 
//     let scoreOne = a.Score
//     let scoreTwo = b.Score 
//     // Variable that can be incremented or decremented to help with comparison if/else statement 
//     let comparisonAmount = 0

//     if (scoreOne > scoreTwo) {
//         comparisonAmount = +1
//     }
//     else {
//         comparisonAmount = -1
//     }

//     return comparisonAmount
// }
// getHighScores()