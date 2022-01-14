import randomNum from '../randomNum.js';

const rule = 'Find the greatest common divisor of given numbers.';
const gameData = () => {
  const a = randomNum(1, 50);
  const b = randomNum(1, 50);
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
export { rule, gameData };
