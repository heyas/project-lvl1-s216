import game from '..';
import random from '../utils';

const main = () => {
  const number1 = random(1, 10);
  const number2 = random(1, 10);
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

export default game(main);
