import TodoItem from './TodoItem';
import { Todo } from './model';

type Props = {
  items: Todo[];
  editingId: number | null;
};

function TodosList({ items, editingId }: Props) {
  return (
    <div className="TodosList">
      {items.map((item) => (
        <TodoItem item={item} isEditing={editingId === item.id} />
      ))}
    </div>
  );
}

export default TodosList;
