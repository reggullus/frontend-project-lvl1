import _ from 'lodash';

const rules = 'What is the result of the expression?';

const answer = () => {
  const operator = '-+*';
  const randomOper = operator[_.random(0, operator.length - 1)];
  const a = _.random(1, 10);
  const b = _.random(1, 10);
  const question = `${a} ${randomOper} ${b}`;
  const correctAnswer = () => {
    switch (randomOper) {
      case '-':
        return a - b;
      case '+':
        return a + b;
      default:
        return a * b;
    }
  };
  return [question, `${correctAnswer()}`];
};
export { rules, answer };
