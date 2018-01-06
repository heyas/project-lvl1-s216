import game from '..';
import random from '../utils';

const main = () => {
  const isPrime = (question) => {
    const next = (n, d) => {
      if (d >= n / 2) { return false; }
      return n % d === 0 ? true : next(n, d + 1);
    };
    return next(question, 2);
  };
  const question = random(1, 100);
  const rightAnswer = !isPrime(question) ? 'yes' : 'no';
  return [`Is this number prime? ${question}`, rightAnswer];
};

export default game(main);
