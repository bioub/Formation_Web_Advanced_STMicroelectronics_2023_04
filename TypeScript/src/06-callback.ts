function setTimeoutSync(cb: () => void, delayMs: number) {
  const debut = Date.now();

  // ICI JE BLOQUE LE THREAD PENDANT delayMS
  // NE PAS LE FAIRE
  while (debut + delayMs > Date.now()) {}

  cb();
}

setTimeoutSync(() => console.log('A'), 500);
setTimeoutSync(() => console.log('B'), 0);
setTimeoutSync(() => console.log('C'), 1000);
setTimeoutSync(() => console.log('D'), 500);

console.log('E');
