import 'reflect-metadata'; // ne pas déplacer (doit etre importé avant toutes les lignes liées à inversify)

import { Logger } from "./Logger";
import { container } from "./container";

// const logger = container.get<Logger>('logger');
const logger1 = container.get(Logger);
const logger2 = container.get(Logger);

logger1.log('Message depuis l\'app en dev');
logger2.log('Message depuis l\'app en dev');

console.log(logger1 === logger2); // true (même objet), false (2 objets)
