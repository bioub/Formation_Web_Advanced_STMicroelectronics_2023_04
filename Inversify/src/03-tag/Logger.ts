import { inject, injectable, tagged } from "inversify";
import { WriterInterface } from "./WriterInterface";

@injectable()
export class Logger {
  constructor(@inject(WriterInterface) @tagged("env", process.env.NODE_ENV ?? 'development') private writer: WriterInterface) {}

  async log(msg: string) {
    const formatted = `${new Date().toISOString()} - ${msg}\n`;
    await this.writer.write(formatted);
  }
}
