import gameLogic from '../index.js';
import randomNum from '../randomNum.js';

const rule = 'What number is missing in the progression?';
const getProgression = (start, step) => {
  let result = 0;
  const arrProgression = [];
  const progressionLength = randomNum(5, 10);
  for (let i = 0; i < progressionLength; i += 1) {
    result = start + i * step;
    arrProgression.push(result);
  }
  return arrProgression;
};
const getGameData = () => {
  const startNum = randomNum(1, 10);
  const stepNum = randomNum(1, 10);
  const progression = getProgression(startNum, stepNum);
  const hiddenIndex = randomNum(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, `${(correctAnswer)}`];
};
const playProgressionGame = () => gameLogic(rule, getGameData);
export default playProgressionGame;
