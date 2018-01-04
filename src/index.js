import readlineSync from 'readline-sync';

export const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const even = () => {
  const ask = (name) => {
    const questionNumber = Math.floor(Math.random() * 1000);
    console.log('Question:', questionNumber);
    const userAnswer = readlineSync.question('May I have your name? ');
    const rightAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return false;
  };

  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = greetings();
  for (let rightAnswers = 0; rightAnswers < 3;) {
    if (ask(name)) {
      rightAnswers += 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const games = () => {
  greetings();
};
