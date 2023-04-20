# Exercices

## Créer un nouveau avec create-react-app en Typescript

Utiliser la commande `yarn react-app todos-react --template typescript` pour créer un nouveau projet

## Créer 4 composants

- `Todos`
- `TodoForm`
- `TodosList`
- `TodoItem`

Dans le JSX de `App` insérer `<Todos />`.

Dans le JSX de `Todos` insérer à la suite `<TodoForm />` et `<TodosList />`

Dans le JSX de `TodosList` insérer à la suite 3 `<TodoItem />`

Dans le JSX de `TodoForm` reprendre le HTML du projet `Exercice-TypeScript` et le convertir en JSX :

```
<form class="todos-form">
  <input type="checkbox" class="todos-toggle-checked">
  <input type="text" class="todos-new-input">
  <button>+</button>
</form>
```

Dans le JSX de `TodoItem` reprendre le code DOM du projet `Exercice-TypeScript` et le convertir en JSX :

```
const rowEl = document.createElement('div');
rowEl.className = 'todos-item';
rowEl.dataset.todoId = String(123);

const checkboxEl = document.createElement('input');
checkboxEl.type = 'checkbox';
checkboxEl.className = 'todos-completed';
checkboxEl.checked = false;

const spanEl = document.createElement('span');
spanEl.className = 'todos-span-value';
spanEl.innerText = 'ABC';

const buttonEl = document.createElement('button');
buttonEl.className = 'todos-delete-btn';
buttonEl.innerText = '-';

rowEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

return rowEl;
```
