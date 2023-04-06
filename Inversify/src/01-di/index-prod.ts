import { ConsoleWriter } from "./ConsoleWriter";
import { FileWriter } from "./FileWriter";
import { Logger } from "./Logger";

const writer = new FileWriter();
const logger = new Logger(writer);

logger.log('Message depuis l\'app en prod');
