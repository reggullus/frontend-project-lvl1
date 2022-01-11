import _ from 'lodash';

const rules = 'What number is missing in the progression?';
const answer = () => {
  const index = _.random(1, 5);
  const hidedIndex = _.random(1, 9);
  let answerStr = '';
  let result = _.random(1, 100);
  let questionStr = `${result}`;
  for (let i = 0; i < 10; i += 1) {
    result += index;
    if (i === hidedIndex) {
      questionStr += ', ..';
      answerStr += `${result}`;
    } else questionStr += `, ${result}`;
  }
  return [questionStr, answerStr];
};
export { rules, answer };
