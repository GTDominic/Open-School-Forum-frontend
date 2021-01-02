import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
const config = require('./config.json');

const baseUrl = config.ServerUrl + '/user/';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(baseUrl + 'register', user, this.httpOptions).pipe(
      tap((newUser: User) => console.log(`added user w/ id=${newUser.Username}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

export interface User {
  Username: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}
