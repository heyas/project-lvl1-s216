import readlineSync from 'readline-sync';

export const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const ask = () => readlineSync.question();

export default gameFunction => () => {
  console.log('Welcome to the Brain Games!');
  const name = greetings();
  for (let rightAnswers = 0; rightAnswers < 3;) {
    const [question, rightAnswer] = gameFunction();
    console.log('Question:', question);
    const userAnswer = ask();
    if (userAnswer === rightAnswer.toString()) {
      rightAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
