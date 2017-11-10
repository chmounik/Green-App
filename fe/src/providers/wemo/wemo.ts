import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WemoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WemoProvider {
  wemodata: any;

  constructor(public http: Http) {
    console.log('Hello WemoProvider Provider');
    this.wemodata = null;
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
      return this.http.get('http://localhost:3000/wemo');
    }
  }
