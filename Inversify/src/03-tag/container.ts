import { ConsoleWriter } from "./ConsoleWriter";
import { Logger } from "./Logger";
import { Container } from "inversify";
import { WriterInterface } from "./WriterInterface";
import { FileWriter } from "./FileWriter";

// export const container = new Container({
//   autoBindInjectable: true,
//   defaultScope: 'Singleton'
// });

export const container = new Container();

container.bind(WriterInterface).to(FileWriter).whenTargetTagged('env', 'production');
container.bind(WriterInterface).to(ConsoleWriter).whenTargetTagged('env', 'development');

container.bind(Logger).toSelf().inSingletonScope();
