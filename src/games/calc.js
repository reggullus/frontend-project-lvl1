import randomNum from '../randomNum.js';

const rule = 'What is the result of the expression?';
const operator = '-+*';

const randomData = (a, b, randomOperator) => {
  switch (randomOperator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    default:
      return a * b;
  }
};
const gameData = () => {
  const randomOperator = operator[randomNum(0, operator.length - 1)];
  const a = randomNum(1, 10);
  const b = randomNum(1, 10);
  const question = `${a} ${randomOperator} ${b}`;
  const correctAnswer = randomData(a, b, randomOperator);
  return [question, `${correctAnswer}`];
};
export { rule, gameData };
