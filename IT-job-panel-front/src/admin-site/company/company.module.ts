import { CompanyCardComponent } from './company-card/company-card.component';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { Route } from '@angular/router';
import { MyCommonModule } from 'src/common/common.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { adminReducer } from '../store/reducers/admin.reducers';
import { AdminEffects } from '../store/effects/admin.effects';

const routes: Route[] = [
  {
    path: '', component: CompanyComponent
  },

]

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyCreateComponent,
    CompanyCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MyCommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCommonModule,
    MatDividerModule,
    StoreModule.forFeature('admin',{admin: adminReducer}),
    EffectsModule.forFeature([AdminEffects]),
  ]
})
export class CompanyModule { }
