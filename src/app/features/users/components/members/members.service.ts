import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Member } from './member';
import { environment } from 'src/environments/environment';
import { HttpErrorHandlerService } from 'src/app/core/services/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MembersService {

 membersUrl = environment.url + '/members';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private httpErrorHandlerService: HttpErrorHandlerService
    ){} 
  
  /** GET members from the server */
  getMembers (): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
      .pipe(
        catchError(this.httpErrorHandlerService.handleError)
      );
  }
  
  /* GET members whose name contains search term */
  searchMembers(term: string): Observable<Member[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ? { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Member[]>(this.membersUrl, options)
      .pipe(
        catchError(this.httpErrorHandlerService.handleError)
      );
  }

  /** POST: add a new member to the database */
  addMember (member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersUrl, member, httpOptions)
      .pipe(
        catchError(this.httpErrorHandlerService.handleError)
      );
  }

  /** DELETE: delete the member from the server */
  deleteMember (id: number): Observable<{}> {
    const url = `${this.membersUrl}/${id}`; // DELETE api/members/42

    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.httpErrorHandlerService.handleError)
      );
  }

  /** PUT: update the member on the server. Returns the updated member upon success. */
  updateMember (member: Member): Observable<Member> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Member>(this.membersUrl, member, httpOptions)
      .pipe(
        catchError(this.httpErrorHandlerService.handleError)
      );
  }
}