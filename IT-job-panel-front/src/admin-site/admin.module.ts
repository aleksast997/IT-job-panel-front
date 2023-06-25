import { CompanyCardComponent } from './company/company-card/company-card.component';
import { CompanyComponent } from './company/company.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './admin.component/admin.component';
import { AdminService } from 'src/services/admin.service';
import { adminReducer } from './store/reducers/admin.reducers';
import { AdminEffects } from './store/effects/admin.effects';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MyCommonModule } from 'src/common/common.module';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider'


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature('admin',{admin: adminReducer}),
    EffectsModule.forFeature([AdminEffects]),
    MyCommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCommonModule,
    MatDividerModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
