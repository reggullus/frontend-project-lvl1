import _ from 'lodash';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const answer = () => {
  const quNum = _.random(1, 100);
  const correctAnswer = quNum % 2 === 0 ? 'yes' : 'no';
  return [quNum, correctAnswer];
};
export { rules, answer };
