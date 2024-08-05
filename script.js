const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const resultContainerElement = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

const questions = [
    {
        question: 'Quelle est la principale utilisation du langage HTML?',
        answers: [
            { text: 'Styler les pages web', correct: false },
            { text: 'Structurer les pages web', correct: true },
            { text: 'Créer des applications mobiles', correct: false },
            { text: 'Développer des jeux vidéo', correct: false }
        ]
    },
    {
        question: 'Que signifie HTML5',
        answers: [
            { text: 'Hero des Territoire du Monde Laminé', correct: false },
            { text: 'HyperText Markuap Language', correct: true },
            { text: 'Heroine Trés Morale Limiter', correct: false },
            { text: 'Hyper Texte Mobile Langue', correct: false }
        ]
    },
    {
        question: 'Quel langage est principalement utilisé pour les styles des pages web?',
        answers: [
            { text: 'HTML', correct: false },
            { text: 'Python', correct: false },
            { text: 'CSS', correct: true },
            { text: 'Java', correct: false }
        ]
    },
    {
        question: 'JavaScript est principalement utilisé pour:',
        answers: [
            { text: 'La gestion des bases de données', correct: false },
            { text: 'L\'animation des pages web', correct: true },
            { text: 'La création de réseaux', correct: false },
            { text: 'Le développement système', correct: false }
        ]
    },
    {
        question: 'Quel est l\'acronyme de CSS?',
        answers: [
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Creative Style System', correct: false },
            { text: 'Cascading Simple Sheets', correct: false },
            { text: 'Creating Style Sheets', correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function restartGame() {
    resultContainerElement.classList.add('hide');
    startGame();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    questionContainerElement.classList.add('hide');
    resultContainerElement.classList.remove('hide');
    scoreElement.innerText = score;
    score = 0;
}


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
