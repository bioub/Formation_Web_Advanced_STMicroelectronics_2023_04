/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
export function createTodo(todo) {
  /*
  Exercice 1 :
  Compléter cette fonction de sorte à créer également
  la checkbox et le bouton comme dans le code HTML suivant :
  <div class="todos-item" data-todo-id="0.32452543">
    <input class="todos-completed" type="checkbox">
    <span>Item 1</span>
    <button>-</button>
  </div>
  Il faut que la checkbox soit cochée si todo.completed === true
  */

  const rowEl = document.createElement('div');
  rowEl.className = 'todos-item';
  rowEl.dataset.todoId = todo.id;

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todos-completed';
  checkboxEl.checked = todo.completed;

  const spanEl = createSpanValue(todo.title);
  // spanEl.contentEditable = 'true';

  // const inputEl = document.createElement('input');
  // inputEl.type = 'text';

  const buttonEl = document.createElement('button');
  buttonEl.className = 'todos-delete-btn'
  buttonEl.innerText = '-';

  rowEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  /*
  Exercice 4 :
  Ecouter le double-clic de la balise span
  et transformer la balise span en input (de sorte
  à pouvoir modifier le contenu)
  Ecouter l'événement keydown de l'input
  si l'utilisateur tape sur ENTREE revenir à la balise span
  */
  // spanEl.addEventListener('dblclick', () => {
  //   inputEl.value = spanEl.innerText;
  //   spanEl.replaceWith(inputEl);
  //   inputEl.select();
  // });

  // inputEl.addEventListener('keydown', (event) => {
  //   if (event.code === 'Enter') {
  //     spanEl.innerText = inputEl.value;
  //     inputEl.replaceWith(spanEl);
  //   }
  // });

  /*
  Exercice 2 :
  Dans l'exercice vous avez créé un bouton
  Ecouter le clic de ce bouton et supprimer
  la ligne parent du bouton au clic
  */
  // buttonEl.addEventListener('click', () => {
  //   rowEl.remove();
  // });

  return rowEl;
}

/**
 * @param {string} val
 * @returns {HTMLSpanElement}
 */
export function createSpanValue(val) {
  const spanEl = document.createElement('span');
  spanEl.className = 'todos-span-value';
  spanEl.innerText = val;
  return spanEl;
}

/**
 * @param {string} val
 * @returns {HTMLInputElement}
 */
export function createInputValue(val) {
  const inputEl = document.createElement('input');
  inputEl.className = 'todos-input-value';
  inputEl.value = val;
  requestAnimationFrame(() => {
    inputEl.select();
  });
  // setTimeout(() => {
  //   inputEl.select();
  // }, 0);
  return inputEl;
}
