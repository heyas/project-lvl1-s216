import game from '..';

const main = () => {
  const number1 = Math.ceil(Math.random() * 100);
  const number2 = Math.ceil(Math.random() * 100);
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
