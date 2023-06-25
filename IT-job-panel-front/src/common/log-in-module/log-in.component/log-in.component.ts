import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AuthService } from 'src/services/auth.service';
import { AppState } from 'src/store/app.states';
import * as AuthActions from '../../../store/actions/auth.actions'

@Component({
  selector: 'app-log-in.component',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user = {email: '', password:''};

  constructor(
    private store: Store<AppState>,
    private service: AuthService
  ) { }

  ngOnInit(): void {
  }

onSubmit() {
  console.log(this.user);
  const credentials = {
    username: this.user.email,
    password: this.user.password
  }
  this.store.dispatch(AuthActions.logIn({credentials}));
  // this.service.login(credentials.email, credentials.password).subscribe((token)=>{
  //   console.log(token);
  // }),
  // (error: any) => {
  //   console.log(error)
  // }
}

}
