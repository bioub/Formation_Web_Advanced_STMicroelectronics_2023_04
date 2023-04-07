import path from 'node:path';

console.log(path.dirname('/tmp/dir'));

// Parser les infos d'un chemin :
console.log(path.parse('uploads/file.txt'));
console.log(path.extname('uploads/file.txt'));
console.log(path.basename('uploads/file.txt'));

console.log(path.join('uploads', 'file.txt'));

// resolve = CWD + join
console.log(path.resolve('uploads', 'file.txt'));
