#!/usr/bin/env node

import { rule, gameData } from '../src/games/even.js';
import gameLogic from '../src/index.js';

gameLogic(rule, gameData);
