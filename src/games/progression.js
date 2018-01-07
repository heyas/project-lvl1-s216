import game from '..';
import random from '../utils';

const main = () => {
  const step = random(1, 10);
  const questionElement = random(1, 10);
  const startValue = random(1, 100);

  const nthMemberOfArithProgr = (value, pStep, n) => (value + (pStep * (n - 1)));

  const createGame = (sValue, pStep, n) => {
    if (n === 1) { return nthMemberOfArithProgr(sValue, step, n); }
    return [`${createGame(sValue, pStep, n - 1)},${n === questionElement ? '...' : nthMemberOfArithProgr(sValue, pStep, n)}`];
  };

  const question1 = createGame(startValue, step, 10);
  const rightQuestion = nthMemberOfArithProgr(startValue, step, questionElement);
  return [question1, rightQuestion];
};

export default game(main);
