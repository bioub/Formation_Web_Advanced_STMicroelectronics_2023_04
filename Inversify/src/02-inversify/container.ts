import { ConsoleWriter } from "./ConsoleWriter";
import { Logger } from "./Logger";
import { Container } from "inversify";
import { WriterInterface } from "./WriterInterface";
import { FileWriter } from "./FileWriter";

export const container = new Container();

// container.bind(FileWriter).to(FileWriter);
// container.bind(ConsoleWriter).to(ConsoleWriter);
container.bind(FileWriter).toSelf().inSingletonScope();
container.bind(ConsoleWriter).toSelf().inSingletonScope();

if (process.env.NODE_ENV === 'production') {
  // const writer = container.get(FileWriter);
  // container.bind(WriterInterface).toConstantValue(writer);
  container.bind(WriterInterface).toService(FileWriter);
} else {
  // const writer = container.get(ConsoleWriter);
  // container.bind(WriterInterface).toConstantValue(writer);
  container.bind(WriterInterface).toService(ConsoleWriter);
}



// container.bind('logger').toConstantValue(logger);
// container.bind(Logger).toConstantValue(logger);

// container.bind(Logger).toDynamicValue((context) => {
//   const writer = context.container.get<WriterInterface>(WriterInterface);
//   return new Logger(writer);
// });

container.bind(Logger).toSelf().inSingletonScope();
