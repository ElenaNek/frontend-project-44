import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const minNumber = 1;
const maxNumber = 80;
const amountOfQuestions = 3;

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

const playGcdGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= amountOfQuestions; i += 1) {
    const randomNum = getRandomNumber(minNumber, maxNumber);
    const randomNum2 = getRandomNumber(minNumber, maxNumber);
    console.log(`Question: ${randomNum} ${randomNum2}`);

    const correctAnswer = calcGcd(randomNum, randomNum2);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGcdGame;