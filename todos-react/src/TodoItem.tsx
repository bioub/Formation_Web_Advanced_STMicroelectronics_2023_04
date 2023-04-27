import { Todo } from './model';

type Props = {
  item: Todo;
  isEditing: boolean;
};

function TodoItem({ item, isEditing }: Props) {
  return (
    <div className="TodoItem" data-todo-id={item.id}>
      <input type="checkbox" className="todos-completed" checked={item.completed} />
      {isEditing ? <input value={item.title} /> : <span className="todos-span-value">{item.title}</span>}
      <button className="todos-delete-btn">-</button>
    </div>
  );
}

export default TodoItem;
