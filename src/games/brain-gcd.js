import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const minNumber = 1;
const maxNumber = 80;
const amountOfQuestions = 3;

const calcGcd = (a, b) => {
  while (a !== b && a > 0 && b > 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
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

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGcdGame;
