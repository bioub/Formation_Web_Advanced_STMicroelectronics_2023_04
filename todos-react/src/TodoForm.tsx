import { FormEvent } from 'react';
import { Todo } from './model';

type Props = {
  value: string;
  onTodoFormValueChange(val: string): void;
  onAdd(): void;
};

function TodoForm({ value, onTodoFormValueChange, onAdd }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAdd();
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="checkbox" className="todos-toggle-checked" />
      <input
        type="text"
        className="todos-new-input"
        value={value}
        onChange={(event) => onTodoFormValueChange(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
