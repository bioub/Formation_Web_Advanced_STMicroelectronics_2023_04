import { Todo } from './model';

type Props = {
  item: Todo;
  isEditing: boolean;
  onDelete(todo: Todo): void;
};

function TodoItem({ item, isEditing, onDelete }: Props) {
  return (
    <div className="TodoItem" data-todo-id={item.id}>
      <input type="checkbox" className="todos-completed" defaultChecked={item.completed} />
      {isEditing ? <input value={item.title} /> : <span className="todos-span-value">{item.title}</span>}
      <button className="todos-delete-btn" onClick={() => onDelete(item)}>-</button>
    </div>
  );
}

export default TodoItem;
