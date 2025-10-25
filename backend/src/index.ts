import { Elysia } from 'elysia';
import { auth } from './modules/auth';
import { user } from './modules/user';
import { bits } from './modules/bits';

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .use(auth)
  .use(user)
  .use(bits)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
