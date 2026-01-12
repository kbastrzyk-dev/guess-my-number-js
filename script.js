'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess, guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No number';
    displayMessage('⛔No number');
  } else if (guess === secretNumber) {
    // ------When player wins!--------
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // --------When guess is wrong!-----------
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //   guess > secretNumber ? '⬆️Too High⬆️ !' : '⬇️Too Low⬇️ !';
      displayMessage(guess > secretNumber ? '⬆️Too High⬆️ !' : '⬇️Too Low⬇️ !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Implement functionality, so that the player can make a new guess!

// Select class with the element Again! It should reset the game
// Basically it should restore the values of Score, secretNumber, message and boc inside check.
// restore background color

// When 'Again!' button was clicked.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  // console.log(secretNumber); works fine
});
