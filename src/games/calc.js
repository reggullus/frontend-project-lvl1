import randomNum from '../randomNum.js';
import gameLogic from '../index.js';

const rule = 'What is the result of the expression?';
const operator = '-+*';

const getExpression = (a, b, randomOperator) => {
  switch (randomOperator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      return (`Unknown randomOperator : '${randomOperator}'!`);
  }
};
const getGameData = () => {
  const randomOperator = operator[randomNum(0, operator.length - 1)];
  const a = randomNum(1, 10);
  const b = randomNum(1, 10);
  const question = `${a} ${randomOperator} ${b}`;
  const correctAnswer = getExpression(a, b, randomOperator);
  return [question, `${correctAnswer}`];
};
const playCalcGame = () => gameLogic(rule, getGameData);

export default playCalcGame;
