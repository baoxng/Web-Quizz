// DOM elements
const startBtn = $("#start");
const choices = Array.from(document.querySelectorAll (".choice-text"));
const submitBtn = $("#submit");
var question = $("h1")

//Variables
let currentQuestion = {};
let acceptAnswer = true;
let score = 0;
let nextQuestion= [];

let questions = [
    {
        question: "What is 2 + 2? ",
        choice1:"2",
        choice2:"3" ,
        choice3:"5",
        choice4:"8",
        answer: 2,
        
    },
    {
        question: "What is 2 + 3? ",
        choice1:"2",
        choice2:"3" ,
        choice3:"5",
        choice4:"8",
        answer: 5,
        
    },
    {
        question: "What is 2 + 5? ",
        choice1:"2",
        choice2:"10" ,
        choice3:"7",
        choice4:"8",
        answer: 7,
        
    },
    {
        question: "What is 2 + 4? ",
        choice1:"2",
        choice2:"6" ,
        choice3:"5",
        choice4:"8",
        answer: 6,
        
    }
]




//Click-Event
$("#start").click(function(){
$("<a>")


})



// Funtions 

startGame = () => {
score = 0
nextQuestion= [...questions]
getNewQuestion()
}

getNewQuestion = () => {
    if(nextQuestion.length === 0 || )
}

function selectAnswer(){

}



//Array of Questions




//Timer: When timer hits zero then stop quiz.




//Submit Scores and save player's name 