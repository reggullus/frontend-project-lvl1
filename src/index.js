import readlineSync from 'readline-sync';

const logicGame = (rule, info) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName} !`);
  console.log(rule);
  const gameLevel = 3;
  for (let i = 1; i <= gameLevel; i += 1) {
    const [questionNum, correctAnswer] = info();
    const userAnswer = readlineSync.question(`Question: ${questionNum}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default logicGame;
