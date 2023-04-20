/*
<div class="Hello" id="hello-component">
  Hello <span data-user-name="Romain">Romain</span>
</div>
*/

import React from 'react';

// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';
//   divEl.id = 'hello-component';
//
//   const spanEl = document.createElement('span');
//   spanEl.dataset.userName = 'Romain';
//   spanEl.append('Romain');
//
//   divEl.append('Hello ', spanEl);
//   return divEl;
// }

// function Hello() {
//   const spanEl = React.createElement('span', { 'data-user-name': 'Romain' }, 'Romain');
//
//   const divEl = React.createElement(
//     'div',
//     {
//       className: 'Hello',
//       id: 'hello-component',
//     },
//     'Hello ',
//     spanEl,
//   );
//
//   return divEl;
// }

function Hello() {
  console.log('Hello');

  return (
    <div className="Hello" id="hello-component">
      Hello <span data-user-name="Romain">Romain</span>
    </div>
  );
}

export default Hello;
