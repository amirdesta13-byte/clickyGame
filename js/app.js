// Click a button or object to earn points so that I can increase my score.
// See my current score during the game so that I know how well I am doing.

// See a countdown timer so that I know how much time is left. setInterval();

// Variables
let score : number = 0;
let timeLeft : number = 5;
let gameStarted : boolean = false;
let gameEnded : boolean = false;
let interval : null = null;

// HTML DOM
const button1 : HTMLElement = document.getElementById('button1');
const button2 : HTMLElement = document.getElementById('button2');
const scoreDisplay : HTMLElement = document.getElementById('scoreDisplay');
const timerDisplay : HTMLElement = document.getElementById('timerDisplay');
const label1 : HTMLElement = document.getElementById('label1');
const input1 : HTMLElement = document.getElementById('name');

// UI Functions & Events
button1.addEventListener('click', () => {
  if (!gameEnded) {
    increaseScore();
  }

  if (!gameStarted) {
    startGame();
  }
})

button2.addEventListener('click', () => {
  submitHighScore();
})

input1.style.display = 'none';
label1.style.display = 'none';
button2.style.display = 'none';

// Functions
function increaseScore() : void {
  score++;
  scoreDisplay.innerText = score;
}

function countdown() : void {
  timeLeft--;
  timerDisplay.innerText = timeLeft;

  if (timeLeft <= 0) {
    timerDisplay.innerText = 0;
    endGame();
  }
}

function startGame() : void {
  interval = setInterval(countdown, 1000);
  gameStarted = true;
}

function endGame() : void {
  gameEnded = true;
  clearInterval(interval);
  button1.style.display = 'none';
  input1.style.display = 'block';
  label1.style.display = 'block';
  button2.style.display = 'block';
}

function submitHighScore() : void {
  console.log(input1.value);
  // TODO: POST value to API from Ben.
}
