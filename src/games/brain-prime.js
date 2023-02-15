import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const minNumber = 1;
const maxNumber = 30;
const amountOfQuestions = 3;

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

const playPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= amountOfQuestions; i += 1) {
    const randomNum = getRandomNumber(minNumber, maxNumber);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playPrimeGame;
