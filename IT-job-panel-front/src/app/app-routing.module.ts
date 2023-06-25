import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren:
    () => import('../common/log-in-module/log-in.module').then(m => m.LogInModule)
  },
  {
    path: 'user-site', loadChildren:
    () => import('../user-site/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin-site', loadChildren:
    () => import('../admin-site/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
