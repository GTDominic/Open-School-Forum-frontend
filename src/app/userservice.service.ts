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

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  getRanks() {
    return this.http.get(baseUrl + 'ranks', this.httpOptions).pipe(
      catchError(this.generalError('get_ranks'))
    );
  }

  register(user: User): Observable<User> {
     return this.http.post<User>(baseUrl + 'register', user, this.httpOptions).pipe(
      catchError(this.registerError<User>('addUser'))
    );
  }

  private generalError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Angular Error handler
  private registerError<T>(operation = 'operation', result?: T) {
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
  Ranks: Array<string>;
}
