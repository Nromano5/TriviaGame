const myQuestions = [
    {
        question: "Who sang free bird?",
        answers: {
            a: "Led Zepplin",
            b: "Creedence Clearwater Revival",
            c: "Lynyrd Skynyrd",
            d: "Rush",
        },
        correctAnswer: "Lynyrd Skynyrd"
    },
    {
        question: "Who sang Have You Ever Seen The Rain?",
        answers: {
            a: "Creedence Clearwater Revival",
            b: "Willie Nelson",
            c: "Waylon Jennings",
            d: "Queens of the Stone Age",
        },
        correctAnswer: "Creedence Clearwater Revival"
    },
    {
        question: "Who stole the melody to Under Pressure for his own hit in the 90's?",
        answers: {
            a: "James Brown",
            b: "Vanilla Ice",
            c: "MC Hammer",
            d: "Freddie Mercury",
        },
        correctAnswer: "Vanilla Ice"
    },
    {
        question: "Who sang Sympathy for the Devil?",
        answers: {
            a: "The Beatles",
            b: "The Monkeys",
            c: "The Who",
            d: "The Rolling Stones",
        },
        correctAnswer: "The Rolling Stones"
    },
    {
        question: "Who sang Twist and Shout?",
        answers: {
            a: "The Rolling Stones",
            b: "The Beatles",
            c: "John Lennon",
            d: "The Kinks",
        },
        correctAnswer: "The Beatles"
    },
    {
        question: "What guitarist was famously known for playing guitar with his teeth?",
        answers: {
            a: "Jimi Hendrix",
            b: "Jimmy Page",
            c: "Eddie Van Halen",
            d: "Eric Clapton",
        },
        correctAnswer: "Jimi Hendrix"
    },
    {
        question: "Who doesn't dance anymore, they make money moves?",
        answers: {
            a: "Drake",
            b: "Mick Jagger",
            c: "Sia",
            d: "Cardi B",
        },
        correctAnswer: "Cardi B"
    },
    {
        question: "What band is famous for performing Blitzkreig Bop?",
        answers: {
            a: "The Ramones",
            b: "The Clash",
            c: "Misfits",
            d: "Dead Kennedys",
        },
        correctAnswer: "The Ramones"
    },
    
     
];

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    function buildQuiz() {
        console.log("this is buildquiz function ");
        //we'll need a place to store the HTML output
        const output = [];
        console.log("this is the output " + output);
      //for each question ...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            //we'll want to store the list of answer choices
            const answers = [];
            //and for each availalbe answer...
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type = "radio"
                    name = "question${questionNumber}" value = " ${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            // add this question and its answers to the output.
            output.push(
                `<div class = "question">
                ${currentQuestion.question} </div>
                <div class = "answers"> ${answers.join('')}
                </div>`
            );
        });
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join(" ");
    }

    buildQuiz();
    
    function showResults() {
        console.log("we clicked the button");
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");
        
        //keep track of user's answers
        let numCorrect = 0;
        let numIncorrect = 0;

        //for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            console.log("current question " + currentQuestion);

            const answerContainer = answerContainers [questionNumber];
            
            const selector = `input[name=question${questionNumber}]:checked`;
            console.log("this is the selector " + selector);
            const userAnswer = (answerContainer.querySelector(selector));

            console.log("user answer is " + JSON.stringify(userAnswer));
            if(userAnswer === currentQuestion.correctAnswer){
                //add to the number of correct answers
                numCorrect++;
            }
            else if(userAnswer !== currentQuestion.correctAnswer){
              numIncorrect++;
            }  
        });
        resultsContainer.innerHTML = `Correct: ${numCorrect}  Incorrect: ${numIncorrect}`;
    }

    
    //console.log(quizContainer);



//console.log(myQuestions);

$("#submit").click(showResults);


