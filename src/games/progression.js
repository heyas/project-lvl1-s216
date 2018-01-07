import game from '..';
import random from '../utils';

const main = () => {
  const step = random(1, 10);
  const questionElement = random(1, 10);
  const startValue = random(1, 100);

  const nthMemberOfArithProgr = (value, progressionStep, n) => {
    if (n === 1) { return value; }
    return nthMemberOfArithProgr(value + progressionStep, progressionStep, n - 1);
  };

  let question = '';
  let rightAnswer = '';
  for (let i = 1; i < 11; i += 1) {
    if (i === questionElement) {
      question += '...,';
      rightAnswer = nthMemberOfArithProgr(startValue, step, i);
    } else {
      question += `${nthMemberOfArithProgr(startValue, step, i)},`;
    }
  }
  return [question, rightAnswer];
};

export default game(main);
