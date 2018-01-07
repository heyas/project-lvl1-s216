import game from '..';
import { random, nthMemberOfArithProgr } from '../utils';

const main = () => {
  const step = random(1, 10);
  const questionElement = random(1, 10);
  const startValue = random(1, 100);

  const createGame = (n) => {
    if (n === 1) { return nthMemberOfArithProgr(startValue, step, n); }
    return [`${createGame(n - 1)},${n === questionElement ? '...' : nthMemberOfArithProgr(startValue, step, n)}`];
  };

  const question = createGame(10);
  const rightQuestion = nthMemberOfArithProgr(startValue, step, questionElement);
  return [question, rightQuestion];
};

export default game(main);
