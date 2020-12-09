'use strict';
console.log(document.querySelector('.message').textContent);

//Math.random always gives us a new number and its always different then the number before 🎲
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When no number entered
  if (!guess) {
    document.querySelector('.message').textContent = 'No number 🛑';
    //When entered number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Your guess is correct 🏆';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //High score finding
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Your guess is higher 📈'
          : 'Your guess is lower 📉';
      score--;
    } else {
      document.querySelector('.message').textContent =
        'Sorry you lose the game 😭';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  document.querySelector('.score').textContent = score;
});
//Again button resetting
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});
