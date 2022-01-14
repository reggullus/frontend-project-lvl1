#!/usr/bin/env node

import { rule, gameData } from '../src/games/gcd.js';
import gameLogic from '../src/index.js';

gameLogic(rule, gameData);
