import game from '..';
import random from '../utils';

const main = () => {
  const number1 = random(1, 100);
  const number2 = random(1, 100);
  const greatestDivisor = (a, b) => {
    const next = (max, min) => {
      if (max % min === 0) {
        return min;
      }
      return next(min, max % min);
    };
    const [max, min] = a > b ? [a, b] : [b, a];
    return next(max, min);
  };
  const rightAnswer = greatestDivisor(number1, number2);
  return [`${number1} ${number2}`, rightAnswer];
};

export default game(main);
