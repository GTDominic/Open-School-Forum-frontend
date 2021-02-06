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

  createThread(NewThread) {
    const idToken = localStorage.getItem('id_token');
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json',
        'access-token': idToken }
      )
    };
    return this.http.post(baseUrl + 'threads/new', NewThread, httpOptions)
    .pipe(
      catchError(this.generalError('newthread'))
    );
  }

  getThreadWtihPosts(id) {
    return this.http.get(baseUrl + 'thread/' + id)
    .pipe(
      catchError(this.generalError('posts'))
    );
  }

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
