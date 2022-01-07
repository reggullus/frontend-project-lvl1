import readlineSync from 'readline-sync';

const logGame = (rules, info) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  console.log(rules);

  for (let i = 1; i <= 3; i += 1) {
    const [quNum, answer] = info();
    const userAnswer = readlineSync.question(`Question: ${quNum} `);
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default logGame;
