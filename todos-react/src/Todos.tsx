import { useEffect, useReducer, useState } from 'react';
import TodoForm from './TodoForm';
import TodosList from './TodosList';
import { Todo } from './model';

type Action = {
  type: ActionType;
  payload: Todo | Todo[];
};

enum ActionType {
  ADD_TODO,
  ADD_ALL_TODOS,
  DELETE_TODO,
}

// Reducer est une fonction pure (donc facile à tester)
// (state, action) => newState
export function todosReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      const todo = action.payload as Todo;
      return [...state, todo];
    }
    case ActionType.ADD_ALL_TODOS: {
      const todos = action.payload as Todo[];
      return [...state, ...todos];
    }
    case ActionType.DELETE_TODO: {
      const todo = action.payload as Todo;
      return state.filter((el) => el.id !== todo.id);
    }
    default:
      return state;
  }
}

function Todos() {
  // Exercice 1: useEffect
  // En utilisant useEffect, envoyer la requete HTTP vers le serveur
  // (développé ensemble ou jsonplaceholder)
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  // ou
  // const res = await fetch('http://localhost:4000/api/todos');
  // const todos = await res.json();
  // il ne faut faire la requête que lors du premier affichage du composant
  // Exercice 2:
  // Ajouter un state loading qui vaudrait true ou false en fonction
  // de si la requete est en cours ou pas
  // Afficher "Loading..." au début du composant si loading vaut true
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await res.json();
      setLoading(false);
      dispatch({
        type: ActionType.ADD_ALL_TODOS,
        payload: todos,
      });
    })();
  }, []);

  const [todoFormValue, setTodoFormValue] = useState('ABC');
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: 1, title: 'DEF', completed: false },
    { id: 2, title: 'HIJ', completed: true },
    { id: 3, title: 'KLM', completed: false },
  ]);
  const [editingId, setEditingId] = useState<number | null>(3);
  const [loading, setLoading] = useState(false);

  function handleAdd() {
    dispatch({
      type: ActionType.ADD_TODO,
      payload: {
        id: Math.random(),
        title: todoFormValue,
        completed: false,
      },
    });
  }

  function handleDelete(todo: Todo) {
    dispatch({
      type: ActionType.DELETE_TODO,
      payload: todo,
    });
  }

  return (
    <div className="Todos">
      {loading && <div>Loading...</div>}
      <TodoForm value={todoFormValue} onTodoFormValueChange={setTodoFormValue} onAdd={handleAdd} />
      <TodosList items={todos} editingId={editingId} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
