import randomNum from '../randomNum.js';
import gameLogic from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const checkIsEven = (qustionNum) => qustionNum % 2 === 0;

const getGameData = () => {
  const qustionNum = randomNum(1, 100);
  const correctAnswer = checkIsEven(qustionNum) ? 'yes' : 'no';
  return [qustionNum, correctAnswer];
};
const playEvenGame = () => gameLogic(rule, getGameData);
export default playEvenGame;
