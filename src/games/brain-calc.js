import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const operators = ['+', '-', '*'];
const getRandomOperator = () => operators[getRandomNumber(0, operators.length - 1)];

const minNumber = 1;
const maxNumber = 30;
const amountOfQuestions = 3;

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

const playCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 1; i <= amountOfQuestions; i += 1) {
    const randomNum = getRandomNumber(minNumber, maxNumber);
    const randomNum2 = getRandomNumber(minNumber, maxNumber);
    const randomOperator = getRandomOperator();
    console.log(`Question: ${randomNum} ${randomOperator} ${randomNum2}`);
    const correctAnswer = calc(randomNum, randomOperator, randomNum2);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playCalcGame;
