import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';
import {HomePage} from '../home/home';

import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private username: string;
  private password: string;
  private error: string;
  private status: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authenticationService:AuthenticationProvider,
    private toastCtrl: ToastController, private loadingCtrl: LoadingController) {
    this.authenticationService = authenticationService;
  }
  login(){
    let userData={
      username:this.username,
      password:this.password
    };
    //console.log(this.username);
    //console.log(this.password);
    
    /*if(this.username === 'mounik' && this.password === '123456'){
      //this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(HomePage);
    }*/
    this.authenticationService.loginUser(userData).subscribe(result =>{
      let loading = this.loadingCtrl.create({
          content: 'Logging in ...'
        });
            if(result == true) {
              loading.present();
              let toast = this.toastCtrl.create({
                message: 'Login Successful', 
                duration: 3000});
                toast.present();
                this.navCtrl.setRoot(HomePage);
                loading.dismiss();
            }

            else{
              let toast = this.toastCtrl.create({
                message: 'Username or Password are inCorrect', 
                duration: 3000});
                toast.present();
            }
            });
    //console.log(this.status);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
