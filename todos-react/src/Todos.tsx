import TodoForm from './TodoForm';
import TodosList from './TodosList';
import { Todo } from './model';

function Todos() {
  const todoFormValue = 'ABC';
  const todos: Todo[] = [
    { id: 1, title: 'DEF', completed: false },
    { id: 2, title: 'HIJ', completed: true },
    { id: 3, title: 'KLM', completed: false },
  ];
  const editingId: number | null = 2;

  // Exercice Props et Boucle et Rendu conditionnel
  // 1/ Passer à TodoList la valeur de editingId via les props
  // 2/ Boucler sur la props items dans TodosList (à la place des 3 TodoItem)
  // 3/ Ajouter un props isEditing à TodoItem et lui passer true si editingId correspond
  // à l'item sur lequel vous bouclez (dans TodosList)
  // 4/ Dans TodoItem afficher un <input /> à la place du <span> si isEditing vaut true

  return (
    <div className="Todos">
      <TodoForm value={todoFormValue} />
      <TodosList items={todos} />
    </div>
  );
}

export default Todos;
