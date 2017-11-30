import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  public token: string;

  constructor(public http: Http) {
    console.log('Hello AuthenticationProvider Provider');
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }


  loginUser(user:any) : Observable<boolean>{
    return this.http.post('http://localhost:3000/signup/login',user).map(res=> {
      let token = res.json() && res.json().token;
      if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: token }));

          // return true to indicate successful login
          return true;
      } else {
          // return false to indicate failed login
          return false;
      }
      });
   //console.log(this.status);
   //return this.status;
 }

 logout(): void {
  // clear token remove user from local storage to log user out
  this.token = null;
  //console.log(localStorage.getItem('currentUser'));
  localStorage.removeItem('currentUser');
}
}
