import game from '..';

const main = () => {
  const randomNumber = Math.ceil(Math.random() * 10)
  const action = num => num + randomNumber;
  let num = Math.ceil(Math.random() * 10);
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
