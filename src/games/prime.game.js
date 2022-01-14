import randomNum from '../randomNum.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameData = () => {
  const qustionNum = randomNum(1, 100);
  const correctAnswer = () => {
    for (let i = 2; i < qustionNum; i += 1) {
      if (qustionNum % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  return [qustionNum, correctAnswer()];
};
export { rule, gameData };
