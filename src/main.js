// 1. Generate Random Number (answer)
const gameStart = document.querySelector('.btn-game-start');
let answer = null;
const generateRandomNumber = () => {
  answer = Math.floor(Math.random() * 100);
  console.log(answer);
};
generateRandomNumber();
const gameReset = document.querySelector('.btn-game-reset');
gameReset.addEventListener('click', function() {
  location.reload(true);
});

// 2. Handle Player Sumbission
let userGuessInput = document.querySelector('.user-guess-input');
let userGuessSubmit = document.querySelector('.user-guess-submit');
let userGuess = '';
let guessIndex = 0;
const guessesContainers = document.querySelectorAll('.player-turn-guess');
const guesses = document.querySelectorAll('.player-turn-guess__answer');

// Handle guess response
const guessResponseBox = document.querySelector('#guess-response');
const guessResults = {
  cold: {
    classList: 'alert alert-primary',
    message: 'You are cold.'
  },
  warm: {
    classList: 'alert alert-warning',
    message: 'You are warm!'
  },
  hot: {
    classList: 'alert alert-danger',
    message: 'You are HOT!!'
  },
  correct: {
    classList: 'alert alert-success',
    message: 'You are correct!'
  },
  gameOver: {
    classList: 'alert alert-secondary',
    message: 'Sorry, game over - you lose.'
  }
};

userGuessSubmit.addEventListener('click', function() {
  userGuess = userGuessInput.value;
  guesses[guessIndex].innerHTML = userGuess;
  guessIndex++;
  if (guessIndex > guessesContainers.length - 1) {
    guessResponseBox.classList.value = guessResults.gameOver.classList;
    guessResponseBox.innerText = guessResults.gameOver.message;
  }
  userGuessInput.value = '';
  const absoluteDifference =
    answer - userGuess > 0 ? answer - userGuess : userGuess - answer;
  if (absoluteDifference === 0) {
    guessResponseBox.classList.value = guessResults.correct.classList;
    guessResponseBox.innerText = guessResults.correct.message;
  } else if (absoluteDifference <= 5) {
    guessResponseBox.classList.value = guessResults.hot.classList;
    guessResponseBox.innerText = guessResults.hot.message;
  } else if (absoluteDifference <= 10) {
    guessResponseBox.classList.value = guessResults.warm.classList;
    guessResponseBox.innerText = guessResults.warm.message;
  } else {
    guessResponseBox.classList.value = guessResults.cold.classList;
    guessResponseBox.innerText = guessResults.cold.message;
  }
});
// 3. Compare Values
// 4. Report Outcome
// 5. Handle End of Turn
