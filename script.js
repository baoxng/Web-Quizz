// DOM elements
const startBtn = $("#start");
const submitBtn = $("#submit");
var question = $("#questions");
var timerEl = document.getElementsByClassName(".timer-counter");
var scoreEl = $(".score-number");
var choice = $(".choice-text")

//Variables
let currentQuestion = {};
let acceptAnswer = true;
let Questions = [];
var beginTime= 120;
var timerCount;
var score= 0;


//Array of Questions

let loadQuestions = [
    {
        question: " Document.write() after an HTML document is loaded, will __",
        choice1:"write inside document",
        choice2:"delete all existing HTML" ,
        choice3:"write after a HTML",
        choice4:"will write an end HTML",
        answer: 2,
        
    },
    {
        question: "How do you loop over an array? ",
        choice1:"Variable loops",
        choice2:"String loops" ,
        choice3:"Functions loops",
        choice4:"For loops",
        answer: 4,
        
    },
    {
        question: "What do you use when you want to create a condition? ",
        choice1:"if statments",
        choice2:"else statments" ,
        choice3:"switch statments",
        choice4:"all of the above",
        answer: 4,
        
    },
    {
        question: "What does boolean mean?",
        choice1:"if you see something invisible in a code",
        choice2:"if something is true or false" ,
        choice3:"if you get an error when loading page",
        choice4:"if a ghost is lean it's a boolean",
        answer: 6,
        
    }
]




//Click-Event
$("#start").click(function(){
location.href= "question.html"

})



/*choices.forEach(choice => {
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
*/

// Funtions 

/* startGame = () => {
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
*/




function startGame (){
 score = 0;
 startTimer();
 getQuestions();

}

function getQuestions() {
    for( i= 0; i < loadQuestions.length; i ++){

    }
}

function selectAnswer(){

}





//Timer: When timer hits zero then stop quiz.
function startTimer(){
    var timer= setInterval(function (){
        beginTime -= 1;
        timerEl.innerHTML = timer
        if (timerCount >= 0){
            clearInterval (beginTime = 0);
        }
        console.log (timer);
    }, 1000);
    
}




//Submit Scores and save player's name 