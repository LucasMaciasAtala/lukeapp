import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorInterceptorService implements HttpInterceptor {

  constructor(
    //private loginService: LoginService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const token = thisloginservice.getToken();
    const token = "";
    if (token) {
      const request = req.clone({
        setHeaders: {
          'Authorization': token
        }
      });
      return next.handle(request);
    } else {
      return next.handle(req);
    }
  }


}
