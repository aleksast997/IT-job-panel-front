import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';

import { User } from 'src/utils/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:7070';

  constructor(private http:HttpClient) { }

  public login(username: string, password: string) {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password);
    return this.http.post<any>(`${this.BASE_URL}/login`,
    body.toString(),
    {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
    }
    )
    .pipe(
      map((data: any) => {
        let user: User = data.user
        return user;
      })
    );
  }

}
