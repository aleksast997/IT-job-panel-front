import { initialCompanyValue } from './../../../utils/Company';
import { getCompanySuccess, getCompanyFailed, getTownsSuccess, getTownsFailed, createComanySuccess, createCompanyFailed } from './../actions/admin.actions';
import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { Company } from 'src/utils/Company';
import { Town } from 'src/utils/Town';

export interface AdminState {
  company: {id:number,
    name:string,
    description:string,
    field:string,
    employeeNumber:string,
    foundingYear:number,
    email:string,
    companyHeadquarters:string,
    phoneNumber:string,
    averageRating:number,towns:[]},
  towns: Town[],
  isSaved: boolean
}

export const initialAdminState: AdminState = {
  company: initialCompanyValue,
  towns: [],
  isSaved: null
}

const _adminReducer = createReducer(
  initialAdminState,
  on(getCompanySuccess, (state,  company ) => {
    console.log(company);
    return {
      ...state, company: company
    }
  }),
  // on(getCompanyFailed, (state) => {
  //   return {
  //     ...state, company: null
  //   }
  // }),
  on(getTownsSuccess, (state, { towns }) => {
    return {
      ...state, towns: towns
    }
  }),
  on(getTownsFailed, (state) => {
    return {
      ...state
    }
  }),
  on(createComanySuccess, (state) => {
    return {
      ...state, isSaved: true
    }
  }),
  on(createCompanyFailed, (state) => {
    return {
      ...state, isSaved: false
    }
  })
)

export function adminReducer(state: AdminState, action: Action){
  return _adminReducer(state, action);
}

export const selectAdminState = createFeatureSelector<AdminState>('admin');

export const selectCompany = createSelector(selectAdminState, state => {console.log(state.company); return state.company});

export const selectTowns = createSelector(selectAdminState, state => state.towns);

