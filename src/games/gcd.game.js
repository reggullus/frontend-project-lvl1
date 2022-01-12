import _ from 'lodash';

const rules = 'Find the greatest common divisor of given numbers.';
const answer = () => {
  const a = _.random(1, 50);
  const b = _.random(1, 50);
  const question = `${a} ${b}`;
  const correctAnswer = () => {
    let x = a;
    let y = b;
    while (x !== 0 && y !== 0) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
    }
    x += y;
    return x;
  };
  return [question, `${correctAnswer()}`];
};
export { rules, answer };
