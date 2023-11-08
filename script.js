'use strict';

// Selecionando elementos
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

// Condições de início de jogo
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const btnDiceRoll = document.querySelector('.btn--roll');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const btnHold = document.querySelector('.btn--hold');

player0.points = 5;
player1.points = 5;

player0.score = 0;
player1.score = 0;

let currentPlayer = player0;

const changePlayer = function () {
  currentPlayer.classList.toggle('player--active');

  currentPlayer =
    currentPlayer === player0
      ? (currentPlayer = player1)
      : (currentPlayer = player0);

  currentPlayer.classList.toggle('player--active');
};

const diceRoll = function () {
  diceElement.classList.remove('hidden');
  let diceNumber = Math.floor(Math.random() * 6) + 1;

  switch (diceNumber) {
    case 1:
      currentPlayer.points = 0;
      currentPlayer.querySelector('.current-score').textContent =
        currentPlayer.points;
      diceElement.src = 'dice-1.png';
      changePlayer();

      break;
    case 2:
      currentPlayer.points += 2;
      currentPlayer.querySelector('.current-score').textContent =
        currentPlayer.points;
      diceElement.src = 'dice-2.png';
      break;
    case 3:
      diceElement.src = 'dice-3.png';
      break;
    case 4:
      diceElement.src = 'dice-4.png';
      break;
    case 5:
      diceElement.src = 'dice-5.png';
      break;
    case 6:
      diceElement.src = 'dice-6.png';
      break;
    default:
      break;
  }
};

btnDiceRoll.addEventListener('click', diceRoll);

btnHold.addEventListener('click', function () {
  currentPlayer.score += currentPlayer.points;
  currentPlayer.querySelector('.score').textContent = currentPlayer.score;

  changePlayer();
});
