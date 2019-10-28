import { Injectable } from '@angular/core';

import { from, Observable, of, throwError } from "rxjs";
import { delay, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fakeUser = {
    username: "test",
    password: "test"
  }
  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient
  ) { }

  // fake login
  login(email: string, password: string): Observable<any> {
    const url = environment.url + environment.auth + environment.login;
    const params = { email, password };
    return this.httpClient.post<any>(url, params);
  }

  public setTokenCookie(token: string) {
    this.cookieService.set("token", token);
  }

  public getToken(): string {
    return this.cookieService.get("token");
  }

  public getUser() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public logout() {
    this.cookieService.delete("token");
  }
}
