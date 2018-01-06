import game from '..';
import random from '../utils';

const generateQuestion = () => {
  const question = random(1, 1000);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default game(generateQuestion);
