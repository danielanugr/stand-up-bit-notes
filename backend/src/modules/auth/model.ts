import { t } from 'elysia';

export namespace AuthModel {
  export const signInBody = t.Object({
    email: t.String(),
    password: t.String(),
  });

  export type signInBody = typeof signInBody.static;

  export const signInResponse = t.Object({
    username: t.String(),
    token: t.String(),
  });

  export type signInResponse = typeof signInResponse.static;

  export const signInInvalid = t.Literal('Invalid username or password');
  export type signInInvalid = typeof signInInvalid.static;
}
