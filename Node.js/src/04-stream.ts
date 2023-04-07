import fs from 'node:fs';
import path from 'node:path';
import { createGzip } from 'node:zlib';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
process.chdir(path.dirname(__dirname));

fs.createReadStream('.editorconfig')
  .pipe(fs.createWriteStream('.editorconfig.copy'))

// echo "Bonjour" | grep "Bonjour" > text.txt

// Types de Stream
// ReadStream: lecture
// WriteStream: écriture
// DuplexStream: lecture + écriture
// TransformStream: lecture + transformation + écriture

fs.createReadStream('.editorconfig')
  .pipe(createGzip())
  .pipe(fs.createWriteStream('.editorconfig.zip'))
