import winston from 'winston'; // winston ok (car le .d.ts est dans le paquet npm) (logo DT bleu sur npm)
import _ from 'lodash'; // nécessite d'installer @types/lodash (dans le github Definitely Typed) (logo DT blanc sur npm)
import { getInt } from 'mdn-random'; // nécessite d'écrire le fichier .d.ts (pas de log DT sur npm)
import express, {  } from 'express';
import type { Request, Response } from 'express';
import chalk from 'chalk';

console.log(chalk.blue('Hello'));


function aboutPage(req: Request, res: Response) {

}

const logger = winston.createLogger({
  level: 'info',
  levels: winston.config.syslog.levels,
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

logger.emerg('Database error');

console.log(_.kebabCase('Bonjour à tous')); // bonjour-a-tous
console.log(getInt(0, 100)); //
