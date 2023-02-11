import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const minNumber = 1;
const maxNumber = 30;
const amountOfQuestions = 3;
const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= amountOfQuestions; i += 1) {
    const randomNum = getRandomNumber(minNumber, maxNumber);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;
