import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/utils/User';

import * as fromAdminActions from '../store/actions/admin.actions';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})

export class AdminHomeComponent implements OnInit {

  @Input() user!: User;
  @Output() openCompany: EventEmitter<string> = new EventEmitter<string>();


  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {

  }

  openCompanyPage() {
    this.openCompany.emit(this.user.accessToken);
  }




}
