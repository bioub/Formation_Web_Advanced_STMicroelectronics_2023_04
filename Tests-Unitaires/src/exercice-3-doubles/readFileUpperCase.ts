import fs from 'node:fs/promises';

export async function readFileUpperCase(path: string) {
  const content = await fs.readFile(path, { encoding: 'utf-8' });
  return content.toUpperCase();
}
