'use strict';

const dice = document.querySelector('.dice');
const btnDiceRoll = document.querySelector('.btn--roll');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentPlayer = player0;
currentPlayer.score = 20;

const diceRoll = function () {
  let diceNumber = Math.floor(Math.random() * 6) + 1;

  switch (diceNumber) {
    case 1:
      dice.src = 'dice-1.png';
      currentPlayer.classList.toggle('player--active');

      currentPlayer =
        currentPlayer === player0
          ? (currentPlayer = player1)
          : (currentPlayer = player0);

      currentPlayer.classList.toggle('player--active');

      break;
    case 2:
      currentPlayer.score += 2;
      currentPlayer.querySelector('.current-score').textContent =
        currentPlayer.score;
      dice.src = 'dice-2.png';
      break;
    case 3:
      dice.src = 'dice-3.png';
      break;
    case 4:
      dice.src = 'dice-4.png';
      break;
    case 5:
      dice.src = 'dice-5.png';
      break;
    case 6:
      dice.src = 'dice-6.png';
      break;
    default:
      break;
  }
};

btnDiceRoll.addEventListener('click', diceRoll);
