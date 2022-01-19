import randomNum from '../randomNum.js';
import gameLogic from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const greatestDivisor = (a, b) => {
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
const getGameData = () => {
  const a = randomNum(1, 50);
  const b = randomNum(1, 50);
  const question = `${a} ${b}`;
  const correctAnswer = greatestDivisor(a, b);
  return [question, `${correctAnswer}`];
};
const playGcdGame = () => gameLogic(rule, getGameData);
export default playGcdGame;
