import { injectable } from "inversify";
import { WriterInterface } from "./WriterInterface";

@injectable()
export class ConsoleWriter implements WriterInterface {
  async write(msg: string): Promise<void> {
    console.log(msg);
  }
}
