import { Observable } from 'rxjs';

function interval(delayMs) {
  return new Observable((subscriber) => {
    const _interval = setInterval(() => {
      subscriber.next();
    }, delayMs);
    return () => {
      clearInterval(_interval);
    }
  });
}

// interval(1000).subscribe({
//   next: () => {
//     console.log('1s');
//   },
//   complete: () => {
//     console.log('end setInterval')
//   },
//   error: (err) => {
//     console.log('err ', err)
//   }
// });

// version raccourcie sans complete et error
interval(1000).subscribe(() => {
  console.log('1s');
});
