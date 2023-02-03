import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandomNumber(1, 30);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    const checkEven = randomNum % 2 === 0;
    const correctAnswer = checkEven ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default isEven;
