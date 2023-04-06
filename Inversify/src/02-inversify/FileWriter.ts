import { injectable } from "inversify";
import { WriterInterface } from "./WriterInterface";
import fs from 'fs/promises';

@injectable()
export class FileWriter implements WriterInterface {
  async write(msg: string): Promise<void> {
    await fs.appendFile('app.log', msg);
  }
}
