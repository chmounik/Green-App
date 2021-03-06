import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupProvider } from '../../providers/signup/signup';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  username: any;
  name: any;
  email: any;
  password: any;
  confirmPassword: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public signupProvider: SignupProvider) {
    this.signupProvider = signupProvider;
  }
  register(){
    let userData={
      name:this.name,
      username:this.username,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword
    };
    this.signupProvider.addUser(userData).subscribe(result =>{if(result == 200) this.navCtrl.push(LoginPage);});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
