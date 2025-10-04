'use strict';

const imgDice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const currentPlayerOne = document.querySelector('#current--0');
const scorePlayerOne = document.querySelector('#score--0');

scorePlayerOne.textContent = 0;

imgDice.classList.add('hidden');
let currentScore = 0;
btnRoll.addEventListener('click', function () {
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  // console.log(randomNum);
  imgDice.src = `dice-${randomNum}.png`;
  imgDice.classList.remove('hidden');
  //   currentScore = randomNum;
  //   console.log(currentScore);

  if (randomNum !== 1) {
    currentScore = currentScore + randomNum;
    currentPlayerOne.textContent = currentScore;
  }else{



    
  }
});
