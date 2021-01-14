// DOM elements
const startBtn = $("#start");
const choices = Array.from(document.querySelectorAll (".choice-text"));
const submitBtn = $("#submit");
var question = $("h1")

//Variables
let currentQuestion = {};
let acceptAnswer = true;
let score = 0;
let questionCounter= 0;
let nextQuestion= [];


//Array of Questions

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



const SCORE_POINTS = 4
const MAX_QUESTIONS = 4



//Click-Event
$("#start").click(function(){
$("<a>")


})

choices.forEach(choice => {
  choice.addEventListener("click", e =>{
      if (! acceptAnswer) return
      acceptAnswers= false
      const selectedChoice = e.target
      const selectedAnswer =selectedChoice.dataset["number"]
     
      let classToApply = selectedAnswer == currentQuestion.answer? "correct" : "incorrect"

      if (classToApply === "correct"){
          incrementScore(SCORE_POINTS)
      }

      selectedChoice.parentElement.classList.add(classToApply)
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
      }, 1000)

  })  
})

incrementScore = num => {
    score +=num
    score
}

// Funtions 

startGame = () => {
score = 0
nextQuestion= [...questions]
getNewQuestion()
}

getNewQuestion = () => {
    if(nextQuestion.length === 0  || questionCounter > MAX_QUESTIONS){
        localStorage.setItem("Most Recent Score", score)
        return window.loccation.assign("/highscore.html")
    }
    questionCounter++
    
    question.innerText =currentQuestion.question
    const questionsIndex = Math.floor(Math.random () * nextQuestion.length)
    currentQuestion= nextQuestion[questionsIndex]

    choices.forEach(choice => {
    const number = choice.dataset ["number"]
    choice.innerText = ["choice" + number]
    })
    
    nextQuestion.splice(questionsIndex, 1)
    acceptAnswer = true
}


function selectAnswer(){

}





//Timer: When timer hits zero then stop quiz.




//Submit Scores and save player's name 