import 'reflect-metadata';

import { UserPage } from './UserPage';
import { container } from './container';

// const httpClient = new HttpClient();
// const userService = new UserService(httpClient);
// const userPage = new UserPage(userService);

const userPage = container.get(UserPage);
userPage.render();
