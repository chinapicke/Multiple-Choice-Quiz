
    // Create questions using get document by Element and then priniting it onto the page using textContent 
    // We may also need to create new elements to go in the HTML using javascript and append these 
    // With the questions we will need if statements to work out whether the user has gotten the correct answer or not 
    // We need to create a further if statement to the above that will deduct time from the clock if it is incorrect

    // Create object to store the datat of all the questions and the answers 
    var quizData = [
        {
            question: "What does HTML stand for?",
            a: "HyperText Markup Language",
            b: "HyperText Machine Language",
            c: "HyperText Marking Language",
            d: "HighText Marking Language",
            correct: "HyperText Markup Language",
        },
        {
            question: "Which of the following keywords is used to define a variable in Javascript?",
            a: "var",
            b: "let",
            c: "Both A and B",
            d: "None of the above",
            correct: "Both A and B",
        },
        {
            question: "Which element is used for or styling HTML layout?",
            a: "CSS",
            b: "jQuery",
            c: "Javascript",
            d: "PHP",
            correct: "CSS",
        },
        {
            question: "What does <ul> stand for?",
            a: "Ordered list",
            b: "Unordered list",
            c: "Undefined",
            d: "None of the above",
            correct: "Unordered list",
        },
        {
            question: "What does CSS stand for?",
            a: "Cascading Style Sheets",
            b: "Coloured Special Sheets",
            c: "Color and style sheets",
            d: "None of the above",
            correct: "Cascading Style Sheets",
        },
        {
            question: "What does && expression mean?",
            a: "Question",
            b: "Or",
            c: "Add",
            d: "None of the above",
            correct: "None of the above",
        },
    ]


