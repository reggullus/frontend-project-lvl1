#!/usr/bin/env node

import { rule, gameData } from '../src/games/prime.game.js';
import logicGame from '../src/index.js';

logicGame(rule, gameData);
