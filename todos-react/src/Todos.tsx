import TodoForm from "./TodoForm";
import TodosList from "./TodosList";

function Todos() {

  const todoFormValue = 'ABC';
  const todos = [
    {id: 1, title: 'DEF', completed: false},
    {id: 2, title: 'HIJ', completed: true},
    {id: 3, title: 'KLM', completed: false},
  ]

  // Exercice Props
  // Définir les types Props pour TodoForm
  // et TodosList de sorte à recevoir les valeurs
  // si dessus
  // Dans TodoForm afficher la valeur dans le champs
  // Dans TodoList passer les valeur à TodoItem (sans faire de boucle pour l'instant) :
  // <TodoItem item={items[0]} />
  // <TodoItem item={items[1]} />
  // <TodoItem item={items[2]} />
  // Dans TodoItem définir le type Props et afficher les valeurs
  // au endroit prévu dans le JSX

  return (
    <div className="Todos">
      <TodoForm value={todoFormValue} />
      <TodosList items={todos} />
    </div>
  );
}

export default Todos;
