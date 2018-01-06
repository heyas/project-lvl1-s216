import game from '..';
import random from '../utils';

const main = () => {
  const randomNumber = random(1, 10);
  const action = num => num + randomNumber;
  let num = random(1, 10);
  const row = [];
  for (let i = 0; i < 10; i += 1) {
    row.push(num);
    num = action(num);
  }

  const rightAnswer = row[5];
  row[5] = '...';
  const question = row.join();
  return [question, rightAnswer];
};

export default game(main);
