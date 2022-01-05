import _ from 'lodash';
import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no". ');

const game = () => {
  const cor = 'Correct!';
  const wrongYes = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`;
  const wrongNo = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`;
  const wrong = `It is wrong answer ;(.\nLet's try again, ${userName}`;
  for (let counter = 0; counter !== 3;) {
    const num = _.random(1, 20);
    const answ = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (answ !== 'yes' && answ !== 'no') {
      return wrong;
    }
    if (num % 2 === 0 && answ === 'no') {
      return wrongNo;
    }
    if (num % 2 !== 0 && answ === 'yes') {
      return wrongYes;
    }
    if (num % 2 === 0 && answ === 'yes') {
      console.log(cor);
      counter += 1;
    }
    if (num % 2 !== 0 && answ === 'no') {
      console.log(cor);
      counter += 1;
    }
  }
  return `Congratulations, ${userName}!`;
};
export default game;
