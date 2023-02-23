import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const minNumber = 1;
const maxNumber = 30;
const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataBrainEvenGame = () => {
  const randomNum = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};
const playEvenGame = () => {
  playGame(rule, getDataBrainEvenGame);
};

export default playEvenGame;
