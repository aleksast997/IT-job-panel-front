import { createAction, props } from '@ngrx/store';
import { User } from 'src/utils/User';

export const logIn = createAction(
  '[Auth] Login',
  props<{ credentials: { username: string, password: string } }>()
);

export const logInSuccess = createAction(
  '[Auth] Login success',
  props<{ user: User }>()
);

export const logInFailed = createAction(
  '[Auth] Login failed',
  props<{ error: string }>()
);
