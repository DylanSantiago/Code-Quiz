var questions = [
    {
        question: "How would you write 'Hello World' in an alert box?",
        answers: {
            a: 'alertUser("Hello World")',
            b: 'alertPrompt("Hello World")',
            c: 'promptUser("Hello World")',
            d: 'alert("Hello World")',
        },
        correctAnswer: 'd'
    },
    {
        question: "The proper comment syntax in Javascript is",
        answers: {
            a: '// This is a comment',
            b: '"This is a comment"',
            c: '<!-- This is a comment -->',
            d: '${This is a comment}',
        },
        correctAnswer: 'a'
    },
    {
        question: "Which SQL statement is used to extract data from a database?",
        answers: {
            a: 'OBTAIN',
            b: 'EXTRACT',
            c: 'SELECT',
            d: 'RETRIEVE',
        },
        correctAnswer: 'c'
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: {
            a: 'function()',
            b: 'myfunction()',
            c: 'call myFunction()',
            d: 'myFunction()',
        },
        correctAnswer: 'd'
    },
    {
        question: "The correct way to write a JavaScript array is?",
        answers: {
            a: 'var cars =["BMW", "Audi", "Mercedes"]',
            b: 'var cars = {"BMW", "Audi", "Mercedes"}',
            c: 'var cars = ("BMW", "Audi", "Mercedes")',
            d: 'var cars = "BMW", "Audi", "Mercedes"',
        },
        correctAnswer: 'a'
    },
]

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    
    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for(var i = 0; i<questions.length; i++){
            answers = [];

            for(letter in question[i].answers) {

                answers.push(
                    '<label>'
                        +'<input type="radio" name="question'+i+'"value"'+letter+'">'
                        + letter + ':'
                        + questions[i].answers[letter]
                    +'</label>'
                );
            }
        }

        output.push(
            'div class="question">' + questions[i].question + '</div>'
            +'<div class="answers">' + answers.join('') + '</div>'
        );

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

    }

    showQuestions(questions, quizContainer);


    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}