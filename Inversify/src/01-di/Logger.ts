import { WriterInterface } from "./WriterInterface";

export class Logger {
  constructor(private writer: WriterInterface) {}

  async log(msg: string) {
    const formatted = `${new Date().toISOString()} - ${msg}\n`;
    await this.writer.write(formatted);
  }
}
