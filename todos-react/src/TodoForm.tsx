type Props = {
  value: string;
}

function TodoForm({ value }: Props) {
  return (
    <form className="TodoForm">
      <input type="checkbox" className="todos-toggle-checked" />
      <input type="text" className="todos-new-input" value={value} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
