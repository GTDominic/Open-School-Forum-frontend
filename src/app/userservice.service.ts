import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as moment from 'moment';

const config = require('./config.json');

const baseUrl = config.ServerUrl + '/';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(
    private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  public errorMessage: any;
  Usersign: any;

  getRanks() {
    return this.http.get(baseUrl + 'ranks').pipe(
      catchError(this.generalError('get_ranks'))
    );
  }

  getUserList() {
    return this.http.get(baseUrl + 'user').pipe(
      catchError(this.generalError('getUserList'))
    );
  }

  register(user: User): Observable<User> {
    this.errorMessage = null;
    return this.http.post<User>(baseUrl + 'user/register', user, this.httpOptions)
      .pipe(
        catchError(this.registerError<User>('addUser'))
    );
  }

  private signhttpin(user: SUser): Observable<SUser> {
    return this.http.post<SUser>(baseUrl + 'user/signin', user, this.httpOptions)
      .pipe(
        catchError(this.generalError<SUser>('signin'))
      );
  }

  signin(UsernameEmailIn, PasswordIn) {
    this.Usersign = {
      UsernameEmail: UsernameEmailIn,
      Password: PasswordIn
    };
    this.signhttpin(this.Usersign)
      .subscribe(
        data => {
          this.setSession(data);
        }
      );
  }

  getUserData() {
    const idToken = localStorage.getItem('id_token');
    return {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json',
        'access-token': idToken }
      )
    };
  }

  logout() {
    console.log('logging out');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
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

      this.errorMessage = error.error.message;

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

interface SUser {
  UsernameEmail: string;
  Password: string;
}
