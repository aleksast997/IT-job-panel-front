import { UserHomeComponent } from './user.home.component/user.home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component/user.component';
import { UserRouting } from './user-routing.module';
import { HeaderComponent } from 'src/common/header/header.component';
import { MyCommonModule } from 'src/common/common.module';

@NgModule({
  imports: [
    CommonModule,
    UserRouting,
    MyCommonModule
  ],
  declarations: [
    UserComponent,
    UserHomeComponent,
  ],
  exports: []
})
export class UserModule { }
