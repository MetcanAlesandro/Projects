const questions =[
    {
        question: 'Which is the largest animal in the world?',
        answers: [
            { text: 'Shark', correct: false},
            { text: 'Blue whale', correct: true},
            { text: 'Elephant', correct: false},
            { text: 'Giraffe', correct: false},
        ]
    },
    {
        question: 'Which is the smallest country in the world?',
        answers: [
            { text: 'Vatican City', correct: true},
            { text: 'Bhutan', correct: false},
            { text: 'Andorra', correct: false},
            { text: 'Cyprus', correct: false},
        ] 
    },
    {
        question: 'Which is the largest desert in the world?',
        answers: [
            { text: 'Kalahari', correct: false},
            { text: 'Gobi', correct: false},
            { text: 'Sahara', correct: false},
            { text: 'Antartica', correct: true},
        ]
    },
    {
        question: 'Which is the smallest continent in the world?',
        answers: [
            { text: 'Asia', correct: false},
            { text: 'Australia', correct: true},
            { text: 'Africa', correct: false},
            { text: 'Europe', correct: false},
        ]
    },
    {
        question: 'Where was Elon Musk born?',
        answers: [
            { text: 'South Africa', correct: true},
            { text: 'Australia', correct: false},
            { text: 'Canada', correct: false},
            { text: 'United States', correct: false},
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

startQuiz = () => { // when we start the quiz will resset the current questionIndex and the score to 0
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next'; // will make the text for the next-btn 'Next' because this one will be different at the end of the quiz
    showQuestion(); // then we call the showQuestion function
}

showQuestion = () => {

    resetState(); // we have to call this first to remove the previous answers

    let currentQuestion = questions[currentQuestionIndex]; // here will store the first object from that array
    let questionNumber = currentQuestionIndex + 1; // this will became 1 and increase for every question
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question; // here will modify the h2 text to be questionNumber(1) + '.' + currentQuestion.question wich will get as question from the first object

    currentQuestion.answers.forEach(answer => { // here will display the answers; here the currentQuestion is the first object and .answers to get the answers; foreach to cycle trough every question
        const button = document.createElement('button'); // here we create a button
        button.innerHTML = answer.text; // here we asign the buton text to the answers
        button.classList.add('btn'); // here we add a class btn which is already edited in css
        answerButtons.appendChild(button); // here we apend to the div with answerButton id the new buttons
        if(answer.correct){ // if answer.correct is true                                                                                                                                                                                                                                                        
            button.dataset.correct = answer.correct; // with dataset I am adding an attribute to the button wich in this case will be named correct and will have 'true' as value
        }
        button.addEventListener('click', selectAnswer);
    });
}

resetState = () => { // before calling starQuiz we have to hide the previouse answers from the html
    nextButton.style.display='none'; // hiding the next button
    while(answerButtons.firstChild){ // while there is a child
        answerButtons.removeChild(answerButtons.firstChild); // while there is a child on answerButtons(div) will remmove the child 
    }
}

selectAnswer = e =>{ // creating a new function; I will call this function with some argument (I thought so but it wasn't the case)
    const selectedBtn = e.target; // the target property refers to the element on which the event originally occurred
    const isCorrect = selectedBtn.dataset.correct === 'true'; // checks whether the selectedBtn element has a data-correct attribute with a value of 'true'. If it does, isCorrect will be true; otherwise, it will be false.
    if(isCorrect){
        selectedBtn.classList.add('correct'); // so if isCorrect is true adds .correct class
        score++; // will increase the score
    }else{
        selectedBtn.classList.add('incorrect');
    } // at this point can click on every answer and it will change the color accordingly; we need to remove the click event if the correct answer it's clicked and display the correct answer if a wrong answer it's clicked 
    Array.from(answerButtons.children).forEach(button => { // Array.from(answerButtons.children) -> converts the buttons into an array and then iterates over each button in the array using forEach.
        if(button.dataset.correct === 'true'){ // basically check wich button has the true vallue and adds correct class to it
            button.classList.add('correct'); // adds the correct class if so
        }
        button.disabled = 'true'; // we disabled the button
    });
    nextButton.style.display = 'block'; // we display the 'next' button
} // It's checks whether the selected answer is correct or not and applies appropriate styling to the selected button accordingly.

showScore = () =>{
    resetState(); // calls resetState
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // this will change the h2 that initially has the questions
    nextButton.innerHTML = "Play again"; // next button will becamo play again
    nextButton.style.display = 'block'; // hides the button
}

handleNextButton = () =>{
    currentQuestionIndex ++; // every this function is called currentQuestionIndex get's increased (basically every time next button is pressed)
    if(currentQuestionIndex < questions.length){ // when currentQuestionIndex becames 4 will call showscore
        showQuestion(); // calls show question to show the next question
    }else{
        showScore();
    }

}

nextButton.addEventListener('click', () =>{
    if(currentQuestionIndex < questions.length){ 
        handleNextButton(); // it will call here until index becames 5
    }else{
        startQuiz(); // basically afret the button became play again, it calls startQuiz
    }
});

startQuiz(); //calling startQuiz