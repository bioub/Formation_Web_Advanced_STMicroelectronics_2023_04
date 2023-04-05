type primitive = string | number | boolean;

function log(val: primitive) {
  console.log(val);
}

type objectWithAandB = { a: string, b: string };
type objectWithBandC = { b: string, c: string};
type unionOfObjects = objectWithAandB | objectWithBandC

function withObject(obj: unionOfObjects) {
  // b existe dans tous les choix possibles donc on peut l'utiliser directement
  obj.b
}

type setTimeoutCallback = () => void;

function setTimeoutSync(cb: setTimeoutCallback, delayMs: number) {
  const debut = Date.now();

  // ICI JE BLOQUE LE THREAD PENDANT delayMS
  // NE PAS LE FAIRE
  while (debut + delayMs > Date.now()) {}

  cb();
}
