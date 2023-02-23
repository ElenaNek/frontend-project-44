import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const minNumber = 1;
const maxNumber = 30;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0 && num !== i) {
      return false;
    }
  }
  return true;
};

const getDataIsPrimeGame = () => {
  const randomNum = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

const playPrimeGame = () => {
  playGame(rule, getDataIsPrimeGame);
};

export default playPrimeGame;
