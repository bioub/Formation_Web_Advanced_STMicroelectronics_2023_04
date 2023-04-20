function TodoItem() {
  return (
    <div className="TodoItem" data-todo-id="123">
      <input type="checkbox" className="todos-completed" checked={false} />
      <span className="todos-span-value">ABC</span>
      <button className="todos-delete-btn">-</button>
    </div>
  );
}

export default TodoItem;
