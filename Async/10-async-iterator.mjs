import { createInterface } from 'readline';
import { createReadStream } from 'fs';
import { setTimeout } from 'timers/promises'

const rl = createInterface({
  input: createReadStream('.editorconfig'),
});

for await (const line of rl) {
  console.log(line);
  await setTimeout(1000);
}
