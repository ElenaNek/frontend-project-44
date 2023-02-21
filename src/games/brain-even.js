import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const minNumber = 1;
const maxNumber = 30;
const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const dataBrainEvenGame = () => {
  const randomNum = getRandomNumber(minNumber, maxNumber);
  const question = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const playEvenGame = () => {
  playGame(rule, dataBrainEvenGame);
};

export default playEvenGame;
