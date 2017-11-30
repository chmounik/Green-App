import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { AuthenticationProvider } from '../authentication/authentication';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionProvider {

  constructor(public http: Http,public authenticationService:AuthenticationProvider) {
    console.log('Hello QuestionProvider Provider');
  }

  insertQuestions(formData: any):Observable<any> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/question',formData,options)
                      .map(res => {
                        console.log(res);
                        return res })
                      .catch(error => {
                         console.log(error);
                         return error; } 
                        );
  }

  getQuestions(username : any):Observable<any>{
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:3000/question/'+username,options)
                        .map(res => {
                          console.log(res);
                          return res.json() })
                        .catch(error => {
                           console.log(error);
                           return error; } 
                          );
                        }
}
