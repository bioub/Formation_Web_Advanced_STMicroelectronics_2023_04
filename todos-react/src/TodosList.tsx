import TodoItem from "./TodoItem";
import { Todo } from "./model";

type Props = {
  items: Todo[],
}

function TodosList({ items }: Props) {
  return (
    <div className="TodosList">
      <TodoItem item={items[0]} />
      <TodoItem item={items[1]} />
      <TodoItem item={items[2]} />
    </div>
  );
}

export default TodosList;
