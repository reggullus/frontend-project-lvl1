import randomNum from '../randomNum.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameData = () => {
  const qustionNum = randomNum(1, 100);
  const correctAnswer = qustionNum % 2 === 0 ? 'yes' : 'no';
  return [qustionNum, correctAnswer];
};
export { rule, gameData };
