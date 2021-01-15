// DOM elements
const startBtn = $("#start");
const submitBtn = $("#submit");
var questionEL = $("#questions");
var timerEl = document.getElementsByClassName("timer-counter");
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

var loadQuestions = [
    {
        question: " Document.write() after an HTML document is loaded, will __",
        choice:[
            {answer:"write inside document", correct: false},
            {answer:"delete all existing HTML" , correct: true},
            {answer:"write after a HTML", correct: false},
            {answer:"will write an end HTML", correct: false}
]},

    {
        question: "How do you loop over an array? ",
        choice:[
            {answer: "Variable loops", correct: false},
            {answer:"String loops", correct: false} ,
            {answer:"Functions loops", correct: false},
            {answer:"For loops", correct: true}
    
        ]},
    {
        question: "What do you use when you want to create a condition? ",
        choice:[
            {answer:"if statments", correct: false},
            {answer:"else statments" , correct: false},
            {answer:"switch statments", correct: false},
            {answer:"all of the above", correct: true}
       
        ]},
    {
        question: "What does boolean mean?",
        choice:[
            {answer:"if you see something invisible in a code", correct: false},
            {answer:"if something is true or false" , correct: true},
            {answer:"if you get an error when loading page", correct: false},
            {answer:"if a ghost is lean it's a boolean", correct: false}
     
        
        ]}
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
    questionEL.innerText= loadQuestions.loadQuestions
    question.answer. forEach (answer => {
        const button = document.createElement ("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })


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