import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AdminService } from 'src/services/admin.service';


import { Company } from 'src/utils/Company';
import { Town } from 'src/utils/Town';
import { User } from 'src/utils/User';

import * as fromAdminActions from '../../store/actions/admin.actions';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {

  @Input() towns: Town[];
  @Input() user: User;

  @Output() load: EventEmitter<string> = new EventEmitter<string>();
  @Output() createCompany: EventEmitter<Company> = new EventEmitter<Company>();

  companyForm: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    field: new FormControl('', Validators.required),
    employeeNumber: new FormControl('', Validators.required),
    foundingYear: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    companyHeadquarters: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    averageRating: new FormControl('', Validators.required),

  })

  constructor() { }

  ngOnInit(): void {
    console.log('createaaaa');
    //this.load.emit(this.user.accessToken);
  }

  onSubmit(){
    let company: Company = {
      id: 0,
      name: this.companyForm.get('name').value,
      description: this.companyForm.get('description').value,
      field: this.companyForm.get('field').value,
      employeeNumber: this.companyForm.get('employeeNumber').value,
      foundingYear: this.companyForm.get('foundingYear').value,
      email: this.companyForm.get('email').value,
      companyHeadquarters: this.companyForm.get('companyHeadquarters').value,
      phoneNumber: this.companyForm.get('phoneNumber').value,
      averageRating: this.companyForm.get('averageRating').value,
      towns: []
    }
    console.log(company);
    this.createCompany.emit(company);
  }

}
