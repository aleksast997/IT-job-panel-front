import { initialCompanyValue } from './../../../utils/Company';
import { createCompany } from './../../store/actions/admin.actions';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Company } from 'src/utils/Company';
import { Town } from 'src/utils/Town';
import { User } from 'src/utils/User';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit, AfterViewChecked {

  initialCompanyValue = initialCompanyValue;

  isCreate: boolean = false;

  @Input() company: Company;

  @Output() createCompany: EventEmitter<Company> = new EventEmitter<Company>();

  constructor() { }
  ngAfterViewChecked(): void {
    if( this.company instanceof HttpErrorResponse) {
      this.isCreate = true;
    } else {
      this.isCreate = false;
    }
  }

  ngOnInit(): void {
    console.log(this.company);

  }

  create(createCompany: Company) {
    this.createCompany.emit(createCompany);
  }

}
