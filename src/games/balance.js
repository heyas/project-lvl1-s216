import game from '..';
import random from '../utils';

const main = () => {
  const balance = (str) => {
    const isBalanced = num => Math.max(...num) - Math.min(...num) <= 1;

    const arr = [...str].sort((a, b) => a - b);

    while (!isBalanced(arr)) {
      arr[0] = parseInt(arr[0], 10) + 1;
      arr[arr.length - 1] = parseInt(arr[arr.length - 1], 10) - 1;
      arr.sort((a, b) => a - b);
    }
    return arr.join('');
  };

  const question = random(100, 1000);
  const rightAnswer = balance(question.toString());
  return [question, rightAnswer];
};

export default game(main);
