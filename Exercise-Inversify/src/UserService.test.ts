import 'reflect-metadata';

import { UserService } from './UserService';
import { container } from './container';
import { FakeHttpClient } from './FakeHttpClient';
import { HttpClientInterface } from './HttpClientInterface';

beforeEach(() => {
  container.snapshot();
});

afterEach(() => {
  container.restore();
});

test('fetchUsers resolves users (FakeHttpClient)', async () => {
  const fakeHttpClient = new FakeHttpClient();
  fakeHttpClient.setData([{ name: 'Toto' }]);

  // modifier la config du container
  container.rebind(HttpClientInterface).toConstantValue(fakeHttpClient);

  const userService = container.get(UserService);
  const users = await userService.fetchUsers();
  expect(users[0].name).toBe('Toto');
});

test('fetchUsers resolves users (HttpClient)', async () => {
  const userService = container.get(UserService);
  const users = await userService.fetchUsers();
  expect(users[0].name).toBe('Leanne Graham');
});
