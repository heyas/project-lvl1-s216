import readlineSync from 'readline-sync';

export const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const ask = () => readlineSync.question();

const generateQuestion = () => {
  const question = Math.floor(Math.random() * 1000);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

const generateCalc = () => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  const operandArray = [
    {
      func: (a, b) => a - b,
      symbol: '-',
    },
    {
      func: (a, b) => a + b,
      symbol: '+',
    },
    {
      func: (a, b) => a * b,
      symbol: '*',
    },
  ];
  const operand = operandArray[Math.floor(Math.random() * operandArray.length)];
  const rightAnswer = operand.func(number1, number2);
  return [number1 + operand.symbol + number2, rightAnswer];
};

export const createGame = questionGenerateFunction => () => {
  const name = greetings();
  for (let rightAnswers = 0; rightAnswers < 3;) {
    const [question, rightAnswer] = questionGenerateFunction();
    console.log('Question:', question);
    const userAnswer = ask();
    if (userAnswer == rightAnswer) {
      rightAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const even = createGame(generateQuestion);
export const calc = createGame(generateCalc);

export const games = () => {
  greetings();
  const question = Math.floor(Math.random() * 1000);
  console.log('Question:', question);
};
