import { Schema, model } from 'mongoose';

type User = {
  name: string;
  email: string;
};

function isValidEmail(value: string) {
  return value.includes('@');
}

const userSchema = new Schema<User>({
  name: {
    type: Schema.Types.String,
    required: [true, 'name is mandatory'],
  },
  email: {
    type: Schema.Types.String,
    validate: [isValidEmail, 'email is not valid']
  },
});

export const UserService = model('User', userSchema);
