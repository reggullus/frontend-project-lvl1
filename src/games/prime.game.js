import _ from 'lodash';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const answer = () => {
  const quNum = _.random(1, 100);
  const correctAnswer = () => {
    for (let i = 2; i < quNum; i += 1) {
      if (quNum % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  return [quNum, correctAnswer()];
};
export { rules, answer };
