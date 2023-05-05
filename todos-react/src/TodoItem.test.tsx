import { createRoot } from 'react-dom/client';
import TodoItem from './TodoItem';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

// test('TodoItem renders (with react-dom)', () => {
//   const rootEl = document.createElement('div');

//   const root = createRoot(rootEl);

//   const todo = {
//     id: 1,
//     title: 'ABC',
//     completed: true,
//   };

//   const handleDelete = jest.fn();

//   root.render(<TodoItem item={todo} isEditing={false} onDelete={handleDelete} />);
// });

test('TodoItem renders (with testing-library)', () => {
  const todo = {
    id: 1,
    title: 'ABC',
    completed: true,
  };

  const handleDelete = jest.fn();

  render(<TodoItem item={todo} isEditing={false} onDelete={handleDelete} />);
});

test('TodoItem shows todo (with testing-library)', async () => {
  const todo = {
    id: 1,
    title: 'ABC',
    completed: true,
  };

  const handleDelete = jest.fn();

  render(<TodoItem item={todo} isEditing={false} onDelete={handleDelete} />);

  const element = await screen.findByText(/abc/i);
  expect(element).toBeInTheDocument();
});


test('TodoItem calls onDelete (with testing-library)', async () => {
  const todo = {
    id: 1,
    title: 'ABC',
    completed: true,
  };

  const handleDelete = jest.fn();

  render(<TodoItem item={todo} isEditing={false} onDelete={handleDelete} />);

  const btnDeleteEl = await screen.findByText('-');

  userEvent.click(btnDeleteEl);

  expect(handleDelete).toHaveBeenCalledWith(todo);
});
