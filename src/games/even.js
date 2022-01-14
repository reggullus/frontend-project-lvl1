import randomNum from '../randomNum.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const numParity = (qustionNum) => {
  if (qustionNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const gameData = () => {
  const qustionNum = randomNum(1, 100);
  const correctAnswer = numParity(qustionNum);
  return [qustionNum, correctAnswer];
};
export { rule, gameData };
