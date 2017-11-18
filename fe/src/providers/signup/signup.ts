import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SignupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignupProvider {

  constructor(public http: Http) {
    console.log('Hello SignupProvider Provider');
  }

  addUser(user:any){
    console.log("Inside Provider");
    console.log(JSON.stringify(user));
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
   // headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
   // headers.append('Access-Control-Allow-Credentials', 'true');
    this.http.post('http://localhost:3000/signup', user) //, {headers: headers})
      .subscribe(res => {
        console.log(res);
  })
}
}
