import randomNum from '../randomNum.js';

const rule = 'What is the result of the expression?';

const gameData = () => {
  const operator = '-+*';
  const randomOperator = operator[randomNum(0, operator.length - 1)];
  const a = randomNum(1, 10);
  const b = randomNum(1, 10);
  const question = `${a} ${randomOperator} ${b}`;
  const correctAnswer = () => {
    switch (randomOperator) {
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
export { rule, gameData };
