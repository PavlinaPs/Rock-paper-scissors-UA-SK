const computerChoiceDisplay = document.getElementById('computer-choice');
const computerChoiceDisplayUK = document.getElementById('computer-choiceUK');

const yourChoiceDisplay = document.getElementById('user-choice');
const yourChoiceDisplayUK = document.getElementById('user-choiceUK');

const resultDisplay = document.getElementById('resultSK');
const resultDisplayUK = document.getElementById('resultUK');

const possibleChoices = document.querySelectorAll('button');

let userChoice
let userChoiceUK
let computerChoice
let computerChoiceUK
let result
let resultUK

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
    translate(userChoice);
    yourChoiceDisplayUK.innerHTML = userChoiceUK;

    generateComputerChoice();
    translate(computerChoice, computerChoiceUK)
    computerChoiceDisplayUK.innerHTML = computerChoiceUK;

    generateWinResult();
    generateLoseResult()
    generateDrawResult()
    getResult();
}) )


function translate(word) {
    switch(word) {
        case 'kameň':
            userChoiceUK = 'Камінь';
            computerChoiceUK = 'Камінь';
            break;
        case 'papier':
            userChoiceUK = 'папір';
            computerChoiceUK = 'папір';
            break;
        case 'nožnice':
            userChoiceUK = 'ножиці';
            computerChoiceUK = 'ножиці';
            break;
    }
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);  /*we want an integer */

    switch(randomNumber) {
        case 0:
            computerChoice = 'kameň';
            break;
        case 1:
            computerChoice = 'papier';
            break;
        case 2:
            computerChoice = 'nožnice';
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    
}

function getResult () {
    result = "";
    switch(true) {
        case computerChoice === userChoice:
            result = drawResult;
            resultUK = drawResultUK;
            break;
        case computerChoice === 'kameň' && userChoice === 'papier':
        case computerChoice === 'papier' && userChoice === 'nožnice':
        case computerChoice === 'nožnice' && userChoice === 'kameň':
            result = winResult;
            resultUK = winResultUK;

            break;
        case computerChoice === 'kameň' && userChoice === 'nožnice':
        case computerChoice === 'papier' && userChoice === 'kameň':
        case computerChoice === 'nožnice' && userChoice === 'papier':
            result = loseResult;
            resultUK = loseResultUK;
            break;
    }
    resultDisplay.innerHTML = result;
    resultDisplayUK.innerHTML = resultUK;
}

const winQuotesArray = ["Vyhral si!", "Si najlepší!", "Pikachu si vyberá teba!"];
const winQuotesArrayUK = ["Ти виграв!", "Ти найкращий!", "Пікачу вибирає тебе!"];
let winResult
let winResultUK
function generateWinResult() {
    winResultIndex = Math.floor(Math.random() * winQuotesArray.length);
    winResult = winQuotesArray[winResultIndex];
    winResultUK = winQuotesArrayUK[winResultIndex];
};

const loseQuotesArray = ["Prehral si", "Skús znova", "Vyhráva počítač", "Nabudúce viac šťastia"];
const loseQuotesArrayUK = ["Ти програв", "Спробуй ще раз", "Комп’ютер перемагає", "Більше удачі наступного разу"];
let loseResult;
let loseResultUK;
function generateLoseResult() {
    loseResultIndex = Math.floor(Math.random() * loseQuotesArray.length);
    loseResult = loseQuotesArray[loseResultIndex];
    loseResultUK = loseQuotesArrayUK[loseResultIndex];
};

const drawQuotesArray = ["Je to remíza!", "Klikni znova"];
const drawQuotesArrayUK = ["Це нічия!", "Натисні ще раз"];
let drawResult;
let drawResultUK;
function generateDrawResult() {
    drawResultIndex = Math.floor(Math.random() * drawQuotesArray.length)
    drawResult = drawQuotesArray[drawResultIndex];
    drawResultUK = drawQuotesArrayUK[drawResultIndex];
};