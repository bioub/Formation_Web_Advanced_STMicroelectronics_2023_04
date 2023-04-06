class Contact {
  private name: string;
  constructor() {
    this.name = 'Romain';
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

const romain = new Contact();

function sayHello(contact: Contact) {
  console.log(contact.hello());
}

sayHello(romain);

class Voiture {
  // private marque: string;
  // constructor(marque: string) {
  //   this.marque = marque;
  // }
  // si on utilise public, private ou protected dans le constructeur
  // on fait les 3 opérations en une
  constructor(private marque: string) {}
  infos() {
    return `Marque : ${this.marque}`;
  }
}

const clio = new Voiture('Renault');
console.log(clio.infos());



