import { Router } from '@angular/router';
import { getCompanySuccess, getCompanyFailed } from './../actions/admin.actions';
import { catchError, of, tap } from 'rxjs';
import { map, switchMap } from 'rxjs';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as AdminActions from '../actions/admin.actions'
import { AdminService } from 'src/services/admin.service';
import { Company } from 'src/utils/Company';
import { Town } from 'src/utils/Town';


@Injectable()
export class AdminEffects {

  constructor(
    private actions: Actions,
    private service: AdminService,
    private router: Router
    ) {}

  getCompany$ = createEffect(() =>
  this.actions.pipe(
    ofType(AdminActions.getCompany),
    switchMap(() =>
      this.service.getCompany().pipe(
        map((company: {id:number,
          name:string,
          description:string,
          field:string,
          employeeNumber:string,
          foundingYear:number,
          email:string,
          companyHeadquarters:string,
          phoneNumber:string,
          averageRating:number,towns:[]} ) =>
          AdminActions.getCompanySuccess(company)
        ),
        catchError((error) =>
        { console.log(error);
          return  of(AdminActions.getCompanyFailed(error))}
        )
      )
    )
  )
  );

  // getCompanySuccess$ = createEffect(() =>
  // this.actions.pipe(
  //   ofType(AdminActions.getCompany),
  //   tap((company: Company) => {
  //     this.router.navigateByUrl('company');
  //   })
  // ),{
  //   dispatch: false
  // }
  // )

  // getCompanyFailed$ = createEffect(() =>
  // this.actions.pipe(
  //   ofType(AdminActions.getCompany),
  //   tap((error) => {
  //     console.log(error);
  //     this.router.navigateByUrl('company/create');
  //   })
  // ),
  // {dispatch: false}
  // );

  createCompany$ = createEffect(() =>
  this.actions.pipe(
    ofType(AdminActions.createCompany),
    switchMap((action) =>
    this.service.createCompany(action.company).pipe(
      map(() =>
        AdminActions.createComanySuccess()
      ),
      catchError((error) =>
        of(AdminActions.createCompanyFailed(error))
      )
    ))
  )
  );

  getTowns$ = createEffect(() =>
  this.actions.pipe(
    ofType(AdminActions.getTowns),
    switchMap((action) =>
      this.service.getTowns(action.token).pipe(
      map((towns: Town[]) =>
        AdminActions.getTownsSuccess({towns})
      ),
      catchError((error) => {
        return of(AdminActions.getTownsFailed(error));
      })
    ))
  )
  )

}
