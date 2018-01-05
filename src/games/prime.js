import game from '..';

const main = () => {
  const isPrimal = (n, d) => {
    if (d >= n / 2) { return false; }
    return n % d === 0 ? true : isPrimal(n, d + 1);
  };
  const question = Math.ceil(Math.random() * 100);
  const rightAnswer = !isPrimal(question, 2) ? 'yes' : 'no';
  return [`Is this number prime? ${question}`, rightAnswer];
};

export default game(main);