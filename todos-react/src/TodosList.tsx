import TodoItem from './TodoItem';
import { Todo } from './model';

type Props = {
  items: Todo[];
  editingId: number | null;
  onDelete(todo: Todo): void;
};

function TodosList({ items, editingId, onDelete }: Props) {
  return (
    <div className="TodosList">
      {items.map((item) => (
        <TodoItem item={item} isEditing={editingId === item.id} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodosList;
