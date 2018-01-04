import game from '..';

const generateQuestion = () => {
  const question = Math.floor(Math.random() * 1000);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default game(generateQuestion);
