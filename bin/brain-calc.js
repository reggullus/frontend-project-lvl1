#!/usr/bin/env node

import { rule, gameData } from '../src/games/calc.js';
import gameLogic from '../src/index.js';

gameLogic(rule, gameData);
