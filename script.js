'use strict';

// Selecionando elementos
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

// Botões new game, roll dice e hold
const btnNewGame = document.querySelector('.btn--new');
const btnDiceRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Condições de início de jogo
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

player0.currentScore = 0;
player1.currentScore = 0;

let currentScore = 0;

player0.score = 0;
player1.score = 0;

let activePlayer = player0;

const changePlayer = function () {
  activePlayer.classList.toggle('player--active');

  activePlayer =
    activePlayer === player0
      ? (activePlayer = player1)
      : (activePlayer = player0);

  activePlayer.classList.toggle('player--active');
};

btnDiceRoll.addEventListener('click', function () {
  // Gerando o número do dado
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // Mostrando o dado na tela
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceNumber}.png`;

  // Se o dado for 1, muda de player e reseta os pontos
  if (diceNumber === 1) {
    activePlayer.currentScore = 0;
    activePlayer.querySelector('.current-score').textContent =
      activePlayer.currentScore;
    changePlayer();
  } else {
    currentScore += diceNumber;

    activePlayer.currentScore += diceNumber;
    activePlayer.querySelector('.current-score').textContent =
      activePlayer.currentScore;
  }
});

btnHold.addEventListener('click', function () {
  activePlayer.score += activePlayer.currentScore;
  activePlayer.currentScore = 0;
  activePlayer.querySelector('.current-score').textContent =
    activePlayer.currentScore;

  activePlayer.querySelector('.score').textContent = activePlayer.score;

  if (activePlayer.score >= 100) {
    alert('venceuu !');
  }

  changePlayer();
});
