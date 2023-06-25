import { User } from "src/utils/User";
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { logInFailed, logInSuccess } from "../actions/auth.actions";

export interface State {
  user: User;

}

export const initialState: State = {
  user: {
    accessToken: '',
    id: 0,
    refreshToken: '',
    role: '',
    username: ''
  }
}

const _authReducer = createReducer(
  initialState,
  on(logInSuccess, (state, { user }) => {
    return {
      ...state,
      user: user
    };
  }),
  on(logInFailed, (state) => {
    return {
      ...state,
      user: {
        accessToken: '',
        id: 0,
        refreshToken: '',
        role: '',
        username: ''
      },
    };
  }),
);

export function authReducer(state: State, action: Action){
  return _authReducer(state, action);
}

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectUser = createSelector(selectAuthState, state => state.user);
