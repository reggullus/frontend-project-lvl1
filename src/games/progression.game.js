import randomNum from '../randomNum.js';

const rule = 'What number is missing in the progression?';
const gameData = () => {
  const index = randomNum(1, 5);
  const hidedIndex = randomNum(1, 9);
  let answerStr = '';
  let result = randomNum(1, 100);
  let questionStr = `${result}`;
  for (let i = 0; i < 10; i += 1) {
    result += index;
    if (i === hidedIndex) {
      questionStr += ' ..';
      answerStr += `${result}`;
    } else questionStr += ` ${result}`;
  }
  return [questionStr, answerStr];
};
export { rule, gameData };
