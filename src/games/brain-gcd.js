import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const minNumber = 1;
const maxNumber = 80;
const rule = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => {
  let k;
  k = a;
  let j;
  j = b;
  while (k !== j && k > 0 && j > 0) {
    if (k > j) {
      k -= j;
    } else {
      j -= k;
    }
  }
  return k;
};

const dataGcdGame = () => {
  const randomNum = getRandomNumber(minNumber, maxNumber);
  const randomNum2 = getRandomNumber(minNumber, maxNumber);
  const question = `${randomNum} ${randomNum2}`;
  const correctAnswer = calcGcd(randomNum, randomNum2);
  return [question, correctAnswer];
};

const playGcdGame = () => {
  playGame(rule, dataGcdGame);
};

export default playGcdGame;
