import { UserserviceService } from './userservice.service';
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
    private http: HttpClient,
    private userservice: UserserviceService
  ) {}

  createThread(NewThread) {
    return this.http.post(baseUrl + 'threads/new', NewThread, this.userservice.getUserData())
    .pipe(
      catchError(this.generalError('newthread'))
    );
  }

  newPost(NewPost, id) {
    return this.http.post(baseUrl + 'thread/' + id, NewPost, this.userservice.getUserData());
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
