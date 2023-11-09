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

// Selecionando Players
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Pontuação inicial dos players, através de propriedades
player0.currentScore = 0;
player1.currentScore = 0;

player0.score = player1.score = 0;

// Pontos necessários para a vitória
let victoryScore = 100;

// Variável que controla o estado do jogo
let gameActive = true;

// Variável que controla o player ativo
let activePlayer = player0;

const switchPlayer = function () {
  activePlayer.classList.toggle('player--active');

  activePlayer.querySelector('.current-score').textContent =
    activePlayer.currentScore;

  activePlayer =
    activePlayer === player0
      ? (activePlayer = player1)
      : (activePlayer = player0);

  activePlayer.classList.toggle('player--active');
};

btnDiceRoll.addEventListener('click', function () {
  // Se o jogo não estiver ativo, nenhum código executa após o return !
  if (!gameActive) return;

  // Gerando o número do dado
  const diceNumber = Math.floor(Math.random() * 6) + 1;

  // Mostrando o dado na tela
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceNumber}.png`;

  // Se o dado for 1, muda de player e reseta os pontos
  if (diceNumber === 1) {
    activePlayer.currentScore = 0;

    switchPlayer();
  } else {
    activePlayer.currentScore += diceNumber;
    activePlayer.querySelector('.current-score').textContent =
      activePlayer.currentScore;
  }
});

btnHold.addEventListener('click', function () {
  // Se o jogo não estiver ativo, nenhum código executa após o return !
  if (!gameActive) return;

  activePlayer.score += activePlayer.currentScore;
  activePlayer.querySelector('.score').textContent = activePlayer.score;

  activePlayer.currentScore = 0;

  if (activePlayer.score >= victoryScore) {
    activePlayer.classList.add('player--winner');
    activePlayer.classList.remove('player--active');
    gameActive = false;
    diceElement.classList.add('hidden');
  } else {
    switchPlayer();
  }
});

btnNewGame.addEventListener('click', function () {
  location.reload();
});
