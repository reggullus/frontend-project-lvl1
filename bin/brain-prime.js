#!/usr/bin/env node

import { rules, answer } from '../src/games/prime.game.js';
import logGame from '../src/index.js';

logGame(rules, answer);
