import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const operators = ['+', '-', '*'];
const getRandomOperator = (operatorsAr) => operatorsAr[getRandomNumber(0, operatorsAr.length - 1)];

const minNumber = 1;
const maxNumber = 30;
const rule = 'What is the result of the expression?';

const calc = (randomNum, randomOperator, randomNum2) => {
  switch (randomOperator) {
    case '+':
      return randomNum + randomNum2;
    case '-':
      return randomNum - randomNum2;
    case '*':
      return randomNum * randomNum2;
    default:
      throw new Error('Wrong operator!');
  }
};

const getDataCalcGame = () => {
  const randomNum = getRandomNumber(minNumber, maxNumber);
  const randomNum2 = getRandomNumber(minNumber, maxNumber);
  const randomOperator = getRandomOperator(operators);
  const question = `${randomNum} ${randomOperator} ${randomNum2}`;
  const correctAnswer = calc(randomNum, randomOperator, randomNum2);
  return [question, correctAnswer.toString()];
};

const playCalcGame = () => {
  playGame(rule, getDataCalcGame);
};

export default playCalcGame;
