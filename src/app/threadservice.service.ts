import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const config = require('./config.json');

const baseUrl = config.ServerUrl + '/';

@Injectable({
  providedIn: 'root'
})
export class ThreadserviceService {

  constructor(
    private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  getThreads() {
    return this.http.get(baseUrl + 'threads').pipe(
      catchError(this.generalError('threads'))
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
}
