import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuthState from '../../store/reducers/auth.reducers';

@Component({
  selector: 'app-user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$ = this.store.select(fromAuthState.selectUser);

  constructor(private store: Store<fromAuthState.State>) { }

  ngOnInit() {
  }

}
