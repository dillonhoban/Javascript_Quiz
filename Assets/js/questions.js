
// User clicks the start quiz button and the timer begins counting down and the first question is displayed
// If the user presses the wrong answer, subtract time from the timer and change color to red until user presses correct answer
// Once user presses correct answer, move on to the next question.
// Once the user finishes the quiz calculate the score and display as an alert 


var myQuestions = [
    {
        question: "How many suns set on Tatooine ?",
        answers: ["1","2","3","4"],
        correctAnswer: "2"
    },
    {
        question: "What species is Jabba?",
        answers: ["Toydarian", "TJawa", "Ugnaught","Hutt"],
        correctAnswer: "Hutt"
    },
    {
        question: "What is the name of the base in Episode 7?",
        answers: ["Solo Base", "Skywalker Base", "Starkiller Base", "Space Base"],
        correctAnswer: "Starkiller Base"
    },
    {
        question: "Which order brought the death of the Jedi?",
        answers: ["Order 55", "Order 66", "Order 77", "Order 88"],
        correctAnswer: "Order 66"
    },
    {
        question: "Who played Princess Leia?",
        answers: ["Natalie Portman", "Sigourney Weaver", "Carrie Fisher", "Jamie Lee Curtis"],
        correctAnswer: "Carrie Fisher"
    },
    {
        question: "Who are the only two characters who appear in every Star Wars movie?"
        answers: ["C-3PO and R2-D2", "Luke and Leia", "Han and Chewbacca", "Darth Vader and Emperor Palpatine"],
        correctAnswer: "C-3PO and R2-D2"
    },
    {
        question: "On which planet do we first meet Rey in The Force Awakens?"
        answers: ["Farlax", "Tatooine", "Dantooine", "Jakku"],
        correctAnswer: "Jakku"
    },
    {
        question: "Which furry species lives on the forest moon of Endor?"
        answers: ["Ewoks", "Wookiees", "Lasat", "Womp rat"],
        correctAnswer: "Ewoks"
    },
    {
        question: "What is the name of Poe Dameron’s astromech droid?"
        answers: ["AA-7", "BB-8", "CC-9", "DD-10"],
        correctAnswer: "BB-8"
    },
    {
        question: "Who was George Lucas's top choice for the character of Han Solo?"
        answers: ["Kurt Russell", "Steve Martin", "Burt Reynolds", "Harrison Ford"]
        correctAnswer: "Burt Reynolds"
    },
    {
        question: "Who is Boba Fett’s father?"
        answers: ["Watto Fett", "Danger Fett", "Cad Fett", "Jango Fett"],
        correctAnswer: "Jango Fett"
    },
    {
        question: "How many parsecs did Han Solo make the Kessel Run in?"
        answers: ["8", "10", "12", "14"],
        correctAnswer: "12"
    },

];

// Correct answers

var rightAnswers = [
    question[0].answers[1],
    question[1].answers[3],
    question[2].answers[2],
    question[3].answers[1],
    question[4].answers[2],
    question[5].answers[0],
    question[6].answers[3],
    question[7].answers[0],
    question[8].answers[1],
    question[9].answers[2],
    question[10].answers[3],
    question[11].answers[2]
]
// PAGE FUNCTIONALITY //

// Starting time for timer
var timeRemaining = 90;

// Start button
document.getElementById("startQuiz").addEventListener('click', function () {
  // Shows time remaining
  document.getElementById("timerText").innerText = timeRemaining;
  // Reveals quiz block with questions/answers
  document.getElementById("main").style.display = 'block';
  // Shows first question
  nextQuestion();
})

// // Page number of questions
// var pageCount = 0;

// // Timer functionality
// function clockTimer() {
//   var countdown = setInterval(function () {
//     timeRemaining--;
//     document.getElementById("timeRemaining").innerText = timeRemaining;

//     if (timeRemaining <= 0 || pageCount == questions.length) {
//       clearInterval(countdown);
//     }
//   }, 1000);
// }

// // Answer button functionality
// class Choice {
//   constructor(choiceNumber) {
//     choiceNumber.addEventListener('click', function () {
//       if (correctAnswers.indexOf(choiceNumber.innerText) !== -1) {
//         for (i = 0; i < questions[pageCount].answers.length; i++) {
//           document.getElementById('main').removeChild(document.getElementById('answer' + i));
//         }
//         pageCount++;
//         nextQuestion();
//       } else {
//         choiceNumber.style.backgroundColor = 'red';
//         choiceNumber.style.borderColor = 'red';
//         timeRemaining -= 5;
//       }
//     })
//   }
// }

// // QUIZ POPULATION //
// function nextQuestion() {

//   // Before last answer is selected
//   if (pageCount < questions.length) {
//     // Write question to main card
//     document.querySelector("#question").textContent = questions[pageCount].question;

//     // Write answers to main card
//     for (i = 0; i < questions[pageCount].answers.length; i++) {
//       var answerBtn = document.createElement('button');
//       answerBtn.setAttribute('class', 'btn btn-secondary');
//       answerBtn.setAttribute('id', 'answer' + i);
//       answerBtn.innerText = questions[pageCount].answers[i];
//       document.getElementById('main').appendChild(answerBtn);
//       new Choice(document.getElementById('answer' + i));
//     }
//   }

//   // After last answer chosen
//   if (pageCount == questions.length) {
//     endingCard();
//   }
// }

// document.querySelector("quizQuestions").innerText = myQuestions[0].question;

// document.querySelector("#answerA").innerText = myQuestions[0].answers.a;
// document.querySelector("#answerB").innerText = myQuestions[0].answers.b;
// document.querySelector("#answerC").innerText = myQuestions[0].answers.c;
// document.querySelector("#answerD").innerText = myQuestions[0].answers.d;

// document.getElementById("answerA").addEventListener("click", function () {
//     console.log("Do you work?");
// });

/*
function functionName(event) {
    event.preventDefault( ):
    var variableName = event.target.getAttribute("id");
  }
  */