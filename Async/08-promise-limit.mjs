// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// await timeout(1000);
// console.log('1s');

// timeout(1000).then(() => {
//   console.log('1s');
// });

function interval(delayMs) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
    }, delayMs);
  });
}

// interval(1000).then(() => {
//   console.log('1s');
// });

// les promesses ne fonctionnent si le callback est appelé
// plusieurs fois, exemple :
// setInterval
// addEventListener
// WebSocket...
await interval(1000);
console.log('1s');
