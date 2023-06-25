import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component/admin.component';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent
  },
  {
    path: 'company', loadChildren: () => import('../admin-site/company/company.module').then(m => m.CompanyModule)
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
