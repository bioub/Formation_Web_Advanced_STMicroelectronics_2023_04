import { ConsoleWriter } from "./ConsoleWriter";
import { Logger } from "./Logger";

const writer = new ConsoleWriter();
const logger = new Logger(writer);

logger.log('Message depuis l\'app en dev');
