import { createInputValue, createSpanValue, createTodo } from './todos.js';

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-new-input');

/** @type {HTMLDivElement} */
const divEl = document.querySelector('.todos-container');

/*
Exercice 3
Sélectionner et ecouter le clic de la checkbox du formulaire
<input type="checkbox" class="todos-toggle-checked">
Au clic cocher ou décocher toutes les checkbox
créées dans l'exercice 1 (celles dans divEl)
*/
/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todos-toggle-checked');

toggleEl.addEventListener('click', () => {
  // document.querySelectorAll('.todos-container input[type=checkbox]')
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = divEl.querySelectorAll('.todos-completed');

  // si besoin d'appeler .filter par exemple
  // const checkboxArray = Array.from(checkboxEls);

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const itemEl = createTodo({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  divEl.prepend(itemEl);
});

// Exercice 5
// Grace à la phase de target
// Ecouter le clic du bouton moins (ex2) ici
// Ecouter les évenements keydown et dblclick (ex4) ici
divEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todos-delete-btn')) {
    target.closest('.todos-item').remove();
  }
});

divEl.addEventListener('dblclick', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todos-span-value')) {
    const inputEl = createInputValue(target.innerText);
    target.replaceWith(inputEl);
    // inputEl.select();
  }
});

divEl.addEventListener('keydown', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (
    target.classList.contains('todos-input-value') &&
    event.code === 'Enter'
  ) {
    target.replaceWith(createSpanValue(target.value));
  }
});

// Exercice 6
// Utiliser l'API fetch pour récupérer les données
// de https://jsonplaceholder.typicode.com/todos
// et pour chaque élément du tableau répondu
// appeler la fonction createTodo et insérer
// dans divEl
// limiter aux 20 premières todos avec slice (Array)
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((todos) => {
    for (const todo of todos.slice(0, 20)) {
      const itemEl = createTodo(todo);
      divEl.append(itemEl);
    }
  });

// Exercice 7
// Utiliser localStorage pour stocker lors de la saisie
// la valeur dans inputEl
// de sorte à ce quand on quitte le navigateur et
// qu'on revienne sur cette page la valeur s'affiche à
// nouveau dans le champs
inputEl.addEventListener('input', () => {
  localStorage.setItem('new-todo', inputEl.value);
});

if (localStorage.getItem('new-todo')) {
  inputEl.value = localStorage.getItem('new-todo');
}
