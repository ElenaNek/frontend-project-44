import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const minNumber = 1;
const maxNumber = 80;
const rule = 'What number is missing in the progression?';

const minStep = 2;
const maxStep = 6;

const generateProgression = (startWith, step) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(startWith + (step * i));
  }
  return result;
};

const dataProgressionGame = () => {
  const randomNum = getRandomNumber(minNumber, maxNumber);
  const randomNum2 = getRandomNumber(minStep, maxStep);

  const progression = generateProgression(randomNum, randomNum2);

  const randomIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[randomIndex].toString();
  progression[randomIndex] = '..';

  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};

const playProgressionGame = () => {
  playGame(rule, dataProgressionGame);
};

export default playProgressionGame;
