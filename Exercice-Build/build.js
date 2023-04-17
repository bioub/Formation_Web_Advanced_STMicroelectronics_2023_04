const fs = require('node:fs/promises');
const path = require('node:path');
const { Buffer } = require('node:buffer');
const md5 = require('md5');
const { minify } = require('terser');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndMkdir(directoryPath) {
  await fs.rm(directoryPath, { force: true, recursive: true });
  await fs.mkdir(directoryPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  if (argv.minify) {
    const { code } = await minify(Buffer.concat(buffers).toString('utf-8'));
    await fs.writeFile(appJsDistPath, code);
  } else {
    await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
  }

  // for (const buffer of buffers) {
  //   await fs.appendFile(appJsDistPath, buffer);
  // }
}

async function buildHtml() {
  let contentStr = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  contentStr = contentStr
    .replace(
      '<script src="./js/horloge.js"></script>',
      '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', '');

  await fs.writeFile(indexHtmlDistPath, contentStr);
}

async function main() {
  try {
    await rmAndMkdir(distPath);
    await buildJs();
    await buildHtml();
  } catch (err) {
    console.log(err.message);
  }
}

main();
