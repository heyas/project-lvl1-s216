import game from '..';
import random from '../utils';

const main = () => {
  const step = random(1, 10);
  const questionElement = random(1, 10);
  const startValue = random(1, 100);
  const progression = (n, iteration, question, rightAnswer) => {
    if (iteration === 0) {
      return [question, rightAnswer];
    }
    if (iteration === questionElement) {
      return progression(n + step, iteration - 1, `${question}...`, n);
    }
    return progression(n + step, iteration - 1, `${question}${n},`, rightAnswer);
  };

  return progression(startValue, 10, '');
};

export default game(main);
