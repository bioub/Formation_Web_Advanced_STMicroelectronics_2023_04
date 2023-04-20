function TodoForm() {
  return (
    <form className="TodoForm">
      <input type="checkbox" className="todos-toggle-checked" />
      <input type="text" className="todos-new-input" />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
