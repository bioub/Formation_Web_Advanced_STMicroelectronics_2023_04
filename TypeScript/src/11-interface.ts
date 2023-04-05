interface ILoggable {
  log(val: string): void;
}

// au sens programmation par contrat
// on oblige à implémenter les méthodes associées
class Logger implements ILoggable {
  log(val: string): void {

  }
}

class FileLogger implements ILoggable {
  log(val: string): void {

  }
  specificAFileLogger() {}
}

function withLogger(logger: ILoggable) {
  logger.log('abc');
  // logger.specificAFileLogger(); // erreur n'est pas défini dans ILoggable
}

withLogger(new Logger());
withLogger(new FileLogger());


// En TS une interface peut etre un type d'objet
// contrairement à Java, on peut contenir des propriétés
interface Coords {
  x: number;
  y: number;
  z?: number;
}

const coords: Coords = {
  x: 1,
  y: 2,
};


interface SetTimeoutCallback {
  (): void;
}

function setTimeoutSync(cb: SetTimeoutCallback, delayMs: number) {
  const debut = Date.now();

  // ICI JE BLOQUE LE THREAD PENDANT delayMS
  // NE PAS LE FAIRE
  while (debut + delayMs > Date.now()) {}

  cb();
}
