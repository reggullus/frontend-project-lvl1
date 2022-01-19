import randomNum from '../randomNum.js';
import gameLogic from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getGameData = () => {
  const qustionNum = randomNum(1, 100);
  const correctAnswer = isPrime(qustionNum) ? 'yes' : 'no';
  return [qustionNum, correctAnswer];
};
const playPrimeGame = () => gameLogic(rule, getGameData);
export default playPrimeGame;
