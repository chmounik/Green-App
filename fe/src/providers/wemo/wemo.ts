import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { AuthenticationProvider } from '../authentication/authentication';
import 'rxjs/add/operator/map';

/*
  Generated class for the WemoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WemoProvider {

  constructor(public http: Http, private authenticationService: AuthenticationProvider) {
    console.log('Hello WemoProvider Provider');
  }
    getWemoData() {
     /* if (this.wemodata) {
        return Promise.resolve(this.wemodata);
      }
      console.log('Inside getWemoData');
      return new Promise(resolve => {
        this.http.get('http://localhost:3000/wemo')
          .map(res => res.json())
          .subscribe(data => {
            this.wemodata = data;
            resolve(this.wemodata);
          });
      }); */
      //console.log(this.authenticationService.token);
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
      let options = new RequestOptions({ headers: headers });
      return this.http.get('http://localhost:3000/wemo',options).map(res => { return res});
    }
  }
