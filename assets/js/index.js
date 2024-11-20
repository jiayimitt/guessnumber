'use strict';

// Variables
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let gameOver = false;

// DOM Elements (selected by class names)
const feedback = document.querySelector('.feedback');
const guessCountDisplay = document.querySelector('.guess-count');
const guessInput = document.querySelector('.guess-input');
const submitBtn = document.querySelector('.submit-btn');

// Handle button click (for both guessing and restarting)
submitBtn.addEventListener('click', () => {
  if (gameOver) {
    restartGame(); // Restart if the game is over
  } else {
    handleGuess(); // Handle a guess if the game is ongoing
  }
});

// Handle the user's guess
function handleGuess() {
  const userGuess = Number(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  guessCount++;
  guessCountDisplay.textContent = guessCount;

  if (userGuess === secretNumber) {
    feedback.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    endGame();
  } else if (userGuess > secretNumber) {
    feedback.textContent = 'My number is smaller.';
  } else {
    feedback.textContent = 'My number is bigger.';
  }

  guessInput.value = '';
}

// End the game
function endGame() {
  gameOver = true;
  guessInput.disabled = true;
  submitBtn.textContent = 'Play Again'; 
}

// Restart the game
function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  gameOver = false;
  guessInput.disabled = false;
  guessInput.value = '';
  feedback.textContent = 'Make your first guess!';
  guessCountDisplay.textContent = 0;
  submitBtn.textContent = 'Submit Guess'; 
}
