#!/usr/bin/env node

import { rule, gameData } from '../src/games/prime.js';
import gameLogic from '../src/index.js';

gameLogic(rule, gameData);
