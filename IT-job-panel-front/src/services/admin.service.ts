import { Observable, take, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Company } from 'src/utils/Company';
import { Town } from 'src/utils/Town';
import * as fromAuthState  from '../store/reducers/auth.reducers';
import { User } from 'src/utils/User';

@Injectable()
export class AdminService {

  private BASE_URL = 'http://localhost:7070';

  user: User;

  constructor( private http: HttpClient, private store: Store ) {

   }

   getToken(): string {
    let token: string;
    this.store.select(fromAuthState.selectUser).subscribe(
      (user) => {token = user.accessToken; return token}
    ).unsubscribe;
    return token;
   }


  public getCompany() {
    return this.http.get<any>(`${this.BASE_URL}/api/company`,
    {
     headers: new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(JSON.stringify(this.getToken()))
     })
    }
    ).pipe(
      map(company => {
        console.log(company);
        return company;
      }),
      catchError((error) => {
        console.log(error);
        return of(error);
      })
    )
  }

  public updateCompany(accessToken: string, company: Company){

    return this.http.put<Company>(`${this.BASE_URL}/api/company`, company,
      {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + JSON.parse(JSON.stringify(accessToken))
        })
      }
    );
  }

  public createCompany(company: Company) {
    console.log(company);
    console.log(this.getToken());
    return this.http.post<any>(`${this.BASE_URL}/api/company`, company,
      {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + JSON.parse(JSON.stringify(this.getToken())),
       // "Content-Type": "application/x-www-form-urlencoded"
        })
      }
    );
  }

  public deleteCompany(accessToken: string, companyId: number){
    return this.http.delete<any>(`${this.BASE_URL}/api/company`,
    {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + JSON.parse(JSON.stringify(accessToken))
      }),
      params: {companyId}
    }
    )
  }

  public getTowns(accessToken: string) {
    return this.http.get<any>(`${this.BASE_URL}/api/towns`,
    {
      headers: new HttpHeaders({
       'Authorization': 'Bearer ' + JSON.parse(JSON.stringify(accessToken))
      })
     }
    ).pipe(
      map((data:any) => {
        console.log(data);
        return data;
      })
    )
  }

}
