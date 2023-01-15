// Created the below functions in logic.js, however brought them over so that this js links with the highscores.html
// Brought over highScoreList variable as it is called within the below functions 

// This accesses the ol of highscores within the highscore HTML 
let highScoreList = document.getElementById("highscores")

var highScores;
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

function displayHighScores() {
    // Sort highscores in order
    highScores.sort(sortScores)
    // For each new initial and score input, create li element to be put in the ol of highscores
    for (let i = 0; i < highScores.length; i++) {
      let li = document.createElement("li");
    
    //   This prints the score and initials of each new created li element onto the webpage
      li.innerHTML = "Initials"+ highScores[i].Initials+ "    Score:"+ highScores[i].Score;
    //   Adds the newly created li element to the highscores list 
      highScoreList.append(li); 
    }
}



// -----FUNCTION TO SORT SCORES FROM HIGH TO LOW------
function sortScores (a,b){
    // Assigned scores into variables so that they can be compared in if/else statement 
    let scoreOne = a.Score
    let scoreTwo = b.Score
    // Variable that can be incremented or decremented to help with comparison if/else statement 
    let comparisonAmount = 0

    if (scoreOne > scoreTwo) {
        // if scoreOne is more than scoreTwo, but this above scoreTwo
        comparisonAmount = +1
    }
    else (scoreOne < scoreTwo) 
        comparisonAmount = -1
    return comparisonAmount
}

getHighScores()

// -----FUNCTION TO CLEAR SCORES---
// Select the clear button on the relevant HTML 
let clearScore = document.getElementById("clear")
// When user clicks the button, function is called
clearScore.addEventListener('click', function() {
    // clears the local storage, checked to see this was functioning by looking at application tabe of the console
localStorage.clear()
})