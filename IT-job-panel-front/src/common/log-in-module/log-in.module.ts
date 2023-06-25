import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { LogInRoutnig } from "./log-in-routnig.module";
import { LogInComponent } from "./log-in.component/log-in.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MyCommonModule } from '../common.module';

@NgModule({
  declarations: [
    LogInComponent,
  ],
  imports: [
    LogInRoutnig,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MyCommonModule
  ],
  providers: [],
  exports: []
})
export class LogInModule { }
