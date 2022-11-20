var questions = [
    {
        question: "How would you write 'Hello World' in an alert box?",
        answers: ['alertUser("Hello World")','alertPrompt("Hello World")','promptUser("Hello World")', 'alert("Hello World")'],
        correctAnswer: 3      
      
    },
    {
        question: "The proper comment syntax in Javascript is",
        answers: ['// This is a comment','"This is a comment"', '<!-- This is a comment -->','${This is a comment}'],
        correctAnswer: 0
    },
    {
        question: "Which SQL statement is used to extract data from a database?",
        answers: ['OBTAIN', 'EXTRACT', 'SELECT', 'RETRIEVE'],
        correctAnswer: 2
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: ['function()', 'myfunction()','call myFunction()','myFunction()'],    
        correctAnswer: 3
    },
    {
        question: "The correct way to write a JavaScript array is?",
        answers: ['var cars =["BMW", "Audi", "Mercedes"]', 'var cars = {"BMW", "Audi", "Mercedes"}', 'var cars = ("BMW", "Audi", "Mercedes")', 'var cars = "BMW", "Audi", "Mercedes"'],
        correctAnswer: 0
    },
]

const allScores = document.getElementById("allScores");
const seconds = document.getElementById("seconds");
const timeLeft = document.getElementById("time-left");
const start = document.getElementById("start");
const startBtn = document.getElementById("startBtn");
const options = document.getElementById("options");
const questionList = document.getElementById("questionList");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const selectAnswer = document.getElementById("answers");
const viewScore = document.getElementById("viewScore");
const score = document.getElementById("score");
const submitBtn = document.getElementById("submitBtn");
const userName = document.getElementById("userName");
const scoresPage = document.getElementById("scoresPage");
const newScores = document.getElementById("newScores");
const returnButton = document.getElementById("returnButton")

var quizArray;
var secondsLeft;
var amountCorrect = 0;

startBtn.addEventListener('click', startQuiz);

function questionLoop() {
    questionList.textContent = questions[quizArray].question;
    answerA.textContent = questions[quizArray].answers[0];
    answerB.textContent = questions[quizArray].answers[1];
    answerC.textContent = questions[quizArray].answers[2];
    answerD.textContent = questions[quizArray].answers[3];
};

function startQuiz() {

    quizArray = 0;
    secondsLeft = 60;
    timeLeft.textContent = secondsLeft;

    questionLoop();

    start.style.display = "none";
    options.style.display = "block";
    seconds.style.display = "block";

    var interval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft
        if (secondsLeft === 0) {
            clearInterval(interval);
            if (quizArray < questions.length - 1) {
                quizOver();
            }
        }
    }, 1000);
};

function choiceA() { 
    correctChoice(0); 
};
function choiceB() { 
    correctChoice(1); 
};
function choiceC() { 
    correctChoice(2); 
};
function choiceD() { 
    correctChoice(3); 
};

answerA.addEventListener("click", choiceA);
answerB.addEventListener("click", choiceB);
answerC.addEventListener("click", choiceC);
answerD.addEventListener("click", choiceD);

function correctChoice(correctAnswer) {
    selectAnswer.style.display ="block";
    if (questions[quizArray].correctAnswer === correctAnswer) {
        amountCorrect++;
        selectAnswer.textContent ="Correct!"
    } else {
        timeLeft.textContent = secondsLeft;
        selectAnswer.textContent ="Incorrect"
    }
    quizArray++
    if (quizArray < questions.length) {
        questionLoop();
    } else {
        quizOver();
    }
};

function quizOver() {
    options.style.display = "none";
    start.style.display = "none";
    viewScore.style.display = "block";
    allScores.style.display = "block";
    score.textContent = amountCorrect;
}

submitBtn.addEventListener("click", function (event) { 
    savedScores(event); 
});

var leaderBoard = localStorage.getItem("Leaderboard")
var storedScore= JSON.parse(leaderBoard);

function saveScore(event) {
    event.preventDefault();
    if (userName.value === "") {
        alert("Enter username to save score");
        return;
    }
    scoresPage.style.display = "block";

    var scoreArray;
    
    if (leaderBoard === null) {
        scoreArray = [];
    } else {
        scoreArray = JSON.parse(leaderBoard)
    }
    var userInput = {
        userName: userName.value,
        score: score.textContent
    };

    scoreArray.push(userInput);

    var storeScore = JSON.stringify(scoreArray);
    window.localStorage.setItem("Leadeboards", storeScore);

    seeScores();
}

submitBtn.addEventListener("click", function (event) { 
    savedScores(event); 
});

var i = 0;

function seeScores() {
    start.style.display = "none";
    scoresPage.style.display = "block";
    scoreView.style.display = "none";

    if (storedScore === null) {
        return;
    }
    for (; i < leaderBoard.length; i++) {
        var saveNewScore = document.createElement("p");
        saveNewScore.innerHTML = storedScore[i].userName + "Score:" + storedScore[i].score;
        newScores.appendChild(saveNewScore);
    }
}

allScores.addEventListener("click", function (event) {
    seeScores(event);
});