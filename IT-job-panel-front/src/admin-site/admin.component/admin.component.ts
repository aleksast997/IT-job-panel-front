import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminService } from 'src/services/admin.service';
import * as fromAuthState from '../../store/reducers/auth.reducers';
import * as fromAdminState from '../store/reducers/admin.reducers';
import * as fromAdminActions from '../store/actions/admin.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user$ = this.store.select(fromAuthState.selectUser);

  isCreate: boolean = false;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
    ) {
      this.isCreate = this.router.url.includes('create');
     }

  public getCompany() {
    this.router.navigateByUrl('company');
  }

  public getTowns(token: string) {
    this.store.dispatch(fromAdminActions.getTowns({token: token}))
  }

  ngOnInit(): void {

  }

  openCompany(token: string){
    //this.isCreate = this.router.url.includes('create');
    //this.getTowns(token);
    this.getCompany();
  }

}
