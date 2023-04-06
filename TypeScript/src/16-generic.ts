// type generic, type paramètres
// comme ArrayList en Java

// ce code fait une erreur sur linkEl.href (car
// statiquement on ne connait pas le type derrière .my-link)
// const linksEls = document.querySelectorAll('.my-link');
// for (const linkEl of linksEls) {
//   console.log(linkEl.href);
// }

// on peut résoudre avec une assertion de type
// const linksEls = document.querySelectorAll('.my-link') as NodeListOf<HTMLAnchorElement>;

// for (const linkEl of linksEls) {
//   console.log(linkEl.href);
// }

// mais la définition typescript de la fonction querySelectorAll est générique
const linksEls = document.querySelectorAll<HTMLAnchorElement>('.my-link');

for (const linkEl of linksEls) {
  console.log(linkEl.href);
}

// idem pour la classe Promise
function returnPromise(): Promise<string> {
  return new Promise<string>((resolve) => {
    resolve('ABC');
  })
}

returnPromise().then((val) => {

});

// pour rappel les fonction async retournent des promesses
// async function readFile(): Promise<Buffer> {
//   return await fs.readFile('monfichier.text');
// }

async function doNothing(): Promise<void> {

}


linksEls[0].addEventListener('click', (event) => {
  const href = (event.currentTarget as HTMLAnchorElement).href;
});
