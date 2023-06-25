import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/utils/User';

@Component({
  selector: 'app-user-home-component',
  templateUrl: './user.home.component.html',
  styleUrls: ['./user.home.component.scss']
})
export class UserHomeComponent implements OnInit {

  @Input()
  user!: User;

  constructor() { }

  ngOnInit() {
  }

}
