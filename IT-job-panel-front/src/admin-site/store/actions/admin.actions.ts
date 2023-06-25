import { createAction, props } from '@ngrx/store';
import { Company } from 'src/utils/Company';
import { Town } from 'src/utils/Town';


export const getCompany = createAction(
  '[Admin] Get Company',
);

export const getCompanySuccess = createAction(
  '[Admin/API] Get company success',
  props< {id:number,
    name:string,
    description:string,
    field:string,
    employeeNumber:string,
    foundingYear:number,
    email:string,
    companyHeadquarters:string,
    phoneNumber:string,
    averageRating:number,towns:[]}>()
);

export const getCompanyFailed = createAction(
  '[Admin/API] Get company failed',
  props<{params: any}>()
);

export const createCompany = createAction(
  '[Admin] create company',
  props<{token: string, company: Company}>()
);

export const createComanySuccess = createAction(
  '[Admin/API] create company success'
);

export const createCompanyFailed = createAction(
  '[Admin/API] create company failed',
  props<{error: any}>()
);

export const getTowns = createAction(
  '[Admin] Get towns',
  props<{token: string}>()
);

export const getTownsSuccess = createAction(
  '[Admin/API] Get towns success',
  props<{towns: Town[]}>()
);

export const getTownsFailed = createAction(
  '[Admin/API] Get towns failed',
  props<{error: any}>()
)
