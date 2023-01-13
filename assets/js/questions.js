
    // Create questions using get document by Element and then priniting it onto the page using textContent 
    // We may also need to create new elements to go in the HTML using javascript and append these 
    // With the questions we will need if statements to work out whether the user has gotten the correct answer or not 
    // We need to create a further if statement to the above that will deduct time from the clock if it is incorrect

    // Create object to store the datat of all the questions and the answers 
    let quizData = [
        {
            question: "What does HTML stand for?",
            answers:[
                {answer: "HyperText Markup Language", correct: true},
                {answer:"HyperText Machine Language", correct: false },
                {answer:"HyperText Marking Language", correct: false },
                {answer:"HighText Marking Language", correct: false }
            ]
        },
        {
            question: "Which of the following keywords is used to define a variable in Javascript?",
            answers:[
                {answer: "var", correct: false},
                {answer:"let", correct: false },
                {answer:"Both A and B", correct: true },
                {answer:"None of the above", correct: false }
            ]
        },
        {
            question: "Which element is used for or styling HTML layout?",
            answers:[
                {answer: "CSS", correct: true},
                {answer:"jQuery", correct: false },
                {answer:"Javascript", correct: false },
                {answer:"PHP", correct: false }
            ]
        },
        {
            question: "What does <ul> stand for?",
            answers:[
                {answer:"Ordered list", correct: false},
                {answer:"Unordered list", correct: true },
                {answer:"Undefined", correct: false },
                {answer:"None of the above", correct: false }
            ]
        },
        {
            question: "What does CSS stand for?",
            answers:[
                {answer:"Cascading Style Sheets", correct: true},
                {answer:"Coloured Special Sheets", correct: false },
                {answer:"Color and style sheets", correct: false },
                {answer:"None of the above", correct: false }
            ]
        },
        {
            question: "What does && expression mean?",
            answers:[
                {answer: "Question", correct: false},
                {answer:"Or", correct: false },
                {answer:"And", correct: false },
                {answer:"None of the above", correct: true }
            ]
        },
    ]


// Create a for loop to iterate through each question to then print to the page 