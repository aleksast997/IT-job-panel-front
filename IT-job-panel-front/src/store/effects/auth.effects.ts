import { logInFailed } from './../actions/auth.actions';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, exhaustMap, Observable, of, map, tap, switchMap } from "rxjs";
import { AuthService } from "src/services/auth.service";
import { User } from "src/utils/User";
import * as AuthActions from '../actions/auth.actions'

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ){}


  logIn$ = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.logIn),
      switchMap((action) =>
        this.authService.login(action.credentials.username, action.credentials.password).pipe(
          map((user: User) =>
            AuthActions.logInSuccess({user})
          ),
          catchError((error) => of(AuthActions.logInFailed({error})))
        )
      )
    )
  );

  logInSuccess$ = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.logInSuccess),
      tap(({user}) => {
        console.log(user);
        if(user.role === "USER"){
          this.router.navigateByUrl('user-site');
        }else {
          this.router.navigateByUrl('admin-site');
        }

      })
    ),
    { dispatch: false }
  );

  logInFailed$ = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.logInFailed),
      tap(({error}) => {
        console.log(error);
      })
    ),
    {dispatch: false}
  );

}
