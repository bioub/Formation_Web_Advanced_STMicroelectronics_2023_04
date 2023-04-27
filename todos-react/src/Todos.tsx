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
  const editingId: number | null = 3;

  // Exercice Event et State
  // 1/ Les 3 variables si dessus doivent se définir dans le state
  // en utilisant useState
  // 2/ Dans TodoForm écouter avec onChange la saisie dans le champs
  // et appeler une fonction passé en props onTodoFormValueChange avec la valeur saisie
  // en paramètre (en s'inspirant de onNowUpdate de l'exemple Clock)
  // Dans Todos, déclarer une fonction qui appelera le setter du state todoFormValue et la
  // passer à la props onTodoFormValueChange de TodoForm
  // 3/ Dans TodoForm écouter le submit du formulaire
  // Appeler event.preventDefault() pour le désactiver
  // appeler une props onAdd de TodoForm que vous aurez déclaré en type,
  // Dans Todos déclarer une fonction qui ajoute un élément au tableau (avec un id aléatoire)
  // lors que onAdd est appelé
  // 4/ Dans TodoItem au double click d'une balise span modifier la valeur editingId
  // de Todos
  // Bonus: au click du bouton moins, supprimer la todo...

  return (
    <div className="Todos">
      <TodoForm value={todoFormValue} />
      <TodosList items={todos} editingId={editingId} />
    </div>
  );
}

export default Todos;
