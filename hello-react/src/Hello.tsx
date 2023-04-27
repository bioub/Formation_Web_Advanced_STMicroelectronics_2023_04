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

type Props = {
  name?: string;
  age?: number;
  isActive?: boolean;
};

function Hello({ name = 'Romain', age = 0, isActive = false }: Props) {
  console.log('Hello');
  // let activeLabel = '';

  // if (isActive) {
  //   activeLabel = ' -> active '
  // }

  // let activeLabel = isActive && ' -> active ';

  const items = ['A', 'B', 'C'];
  // const itemsEl = [];

  // for (const item of items) {
  //   itemsEl.push(<div>{item}</div>)
  // }

  const itemsEl = items.map((item) => <div>{item}</div>);

  return (
    <div className="Hello" id="hello-component">
      Hello <span data-user-name={name}>{name}</span>{" "}
      {/* {isActive && <b>active</b>} */}
      {isActive ? <b>active</b> : <b>not active</b>}
      {/* {itemsEl} */}
      {items.map((item, index) => <div key={item}>{item}</div>)}
    </div>
  );
}

export default Hello;
