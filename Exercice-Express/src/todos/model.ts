import mongoose from "mongoose";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// export type NewTodo = {
//   title?: string;
//   completed?: boolean;
// }

export type NewTodo = Omit<Todo, 'id'>;

// export class TodoService {
//   private static todos: Todo[] = [
//     {
//       id: 1,
//       title: 'Acheter du pain',
//       completed: false,
//     },
//     {
//       id: 2,
//       title: 'Introduire Express',
//       completed: true,
//     },
//   ];

//   // static find(): Promise<Todo[]> {
//   //   return new Promise((resolve) => {
//   //     resolve(this.todos)
//   //   });
//   // }
//   // static find(): Promise<Todo[]> {
//   //   return Promise.resolve(this.todos);
//   // }
//   private static nextId() {
//     // Le cas d'un somme de tous les éléments
//     // [3, 4, 5], 0
//     // somme 0, el 3 => 0 + 3
//     // somme 3, el 4 => 7
//     // somme 7, el 5 => 12
//     // somme finale 12
//     return this.todos.reduce((max, t) => (t.id > max) ? t.id : max, 0) + 1;
//   }
//   static async find(): Promise<Todo[]> {
//     return this.todos;
//   }
//   static async findById(id: any): Promise<Todo | undefined> {
//     const _id = Number(id);
//     return this.todos.find((t) => t.id === _id);
//   }
//   static async create(doc: NewTodo): Promise<Todo> {
//     const todo: Todo = {
//       id: this.nextId(),
//       ...doc,
//     };

//     this.todos.push(todo);

//     return todo;
//   }
//   static async findByIdAndDelete(id: any): Promise<Todo | undefined> {
//     const todo = await this.findById(id);

//     if (todo) {
//       const index = this.todos.indexOf(todo);
//       this.todos.splice(index, 1);
//     }

//     return todo;
//   }

//   static async findByIdAndUpdate(id: any, newTodo: NewTodo): Promise<Todo | undefined> {
//     const todo = await this.findById(id);

//     if (todo) {
//       for (const [key, value] of Object.entries(newTodo)) {
//         (todo as any)[key] = value;
//       }
//     }

//     return todo;
//   }

//   static async findOneAndReplace(filter: {_id: any}, newTodo: NewTodo): Promise<Todo | undefined> {
//     const id = Number(filter._id);
//     let todo = await this.findById(id);

//     if (todo) {
//       const index = this.todos.indexOf(todo);
//       this.todos[index] = {
//         id,
//         ...newTodo
//       };

//       todo = this.todos[index];
//     }

//     return todo;
//   }
// }

const schema = new mongoose.Schema<NewTodo>({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  completed: {
    type: Boolean,
    default: () => false,
  }
});

export const TodoService = mongoose.model('Todo', schema);
