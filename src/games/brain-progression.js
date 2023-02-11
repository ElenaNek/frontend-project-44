import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const minNumber = 1;
const maxNumber = 80;
const amountOfQuestions = 3;

const minStep = 2;
const maxStep = 6;

const generateProgression = (startWith, step) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(startWith + (step * i));
  }
  return result;
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  for (let i = 1; i <= amountOfQuestions; i += 1) {
    const randomNum = getRandomNumber(minNumber, maxNumber);
    const randomNum2 = getRandomNumber(minStep, maxStep);

    const progression = generateProgression(randomNum, randomNum2);

    const randomIndex = getRandomNumber(0, progression.length - 1);
    const correctAnswer = progression[randomIndex].toString();
    progression[randomIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playProgressionGame;
