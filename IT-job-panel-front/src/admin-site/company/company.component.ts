import { Observable } from 'rxjs';
import { getTowns, createCompany } from './../store/actions/admin.actions';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromAuthState from '../../store/reducers/auth.reducers';
import * as fromAdminState from '../store/reducers/admin.reducers';
import * as fromAdminActions from '../store/actions/admin.actions';
import { User } from 'src/utils/User';
import { Company } from 'src/utils/Company';
import { Town } from 'src/utils/Town';
import { AdminState } from '../store/admin.states';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  user$: Observable<User>;
  company$: Observable<any>;
  towns$: Observable<Array<Town>>;

  token: string = '';

  constructor(
    private store: Store<AdminState>, private service: AdminService
    ) {
      //this.store.dispatch(fromAdminActions.getCompany());

    }

  ngOnInit(): void {
    //this.store.dispatch(fromAdminActions.getCompany());
    this.company$ = this.service.getCompany();
    this.towns$ = this.store.select(fromAdminState.selectTowns);
    console.log(this.company$);
  }

  getCompany() {
    this.store.dispatch(fromAdminActions.getCompany());
  }

  getTowns(token: string) {
    this.store.dispatch(fromAdminActions.getTowns({token}));
  }

  loadData(token: string){
    this.token = token;
    this.getCompany();
    //this.getTowns(token);
  }

  createCompany(company: Company) {
    this.service.createCompany(company).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
