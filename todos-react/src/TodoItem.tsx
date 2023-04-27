import { Todo } from "./model";

type Props = {
  item: Todo;
}

function TodoItem({ item }: Props) {
  return (
    <div className="TodoItem" data-todo-id={item.id}>
      <input type="checkbox" className="todos-completed" checked={item.completed} />
      <span className="todos-span-value">{item.title}</span>
      <button className="todos-delete-btn">-</button>
    </div>
  );
}

export default TodoItem;
