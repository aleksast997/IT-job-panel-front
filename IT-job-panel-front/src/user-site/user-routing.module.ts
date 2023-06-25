import { UserComponent } from './user.component/user.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

  const routes: Routes = [
    {
      path: '', component: UserComponent, children: []
    },
  ]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRouting { }
