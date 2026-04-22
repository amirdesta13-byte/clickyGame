// Click a button or object to earn points so that I can increase my score.
// See my current score during the game so that I know how well I am doing.
// See a countdown timer so that I know how much time is left. setInterval();

// Variables
let score = 0;
let timeLeft = 3;
let gameStarted = false;
let gameEnded = false;
let interval = null;

// HTML DOM
const button1 = document.getElementById('button1');
const scoreDisplay = document.getElementById('scoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const label1 = document.getElementById('label1');
const input1 = document.getElementById('name');
const button2 = document.getElementById('button2');

// UI Functions
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
input1.style.display = 'none';
label1.style.display = 'none';
button2.style.display = 'none';

// Functions
function increaseScore() {
  score++;
  console.log(score);
  scoreDisplay.innerText = score;
}

function countdown() {
  timeLeft--;
  timerDisplay.innerText = timeLeft;

  if (timeLeft <= 0) {
    timerDisplay.innerText = 0;
    endGame();
  }
}

function startGame() {
  interval = setInterval(countdown, 1000);
  gameStarted = true;
}

function endGame() {
  gameEnded = true;
  clearInterval(interval);
  button1.style.display = 'none';
  input1.style.display = 'block';
  label1.style.display = 'block';
  button2.style.display = 'block';
}

async function submitHighScore() {
  if (input1.value.trim() === "") {
    button2.innerText = "Skriv ditt namn först!";
    return;}

  try {
    await fetch("https://hooks.zapier.com/hooks/catch/8338993/ujs9jj9/", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ name: input1.value, score: score })
    });
    button2.innerText = "Ditt resultat har sparat" ;
    button2.disabled = true;
  } catch (error) {
  button2.innerText = "Ett fel uppstod" ;
  }
}





/* async function submitHighScore() {
  console.log(input1.value);


  const response = await fetch("https://hooks.zapier.com/hooks/catch/8338993/ujs9jj9/", {
    method: "POST",
    body: JSON.stringify({name: input1.value, score: score}),
  });

  console.log(response);
}
*/
