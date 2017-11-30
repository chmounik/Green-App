import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { Cordova } from '@ionic-native/core';

/**
 * Generated class for the NestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nest',
  templateUrl: 'nest.html',
})
export class NestPage {
  key : any;
  constructor(public modalCtrl:ModalController,public platform:Platform, public navCtrl: NavController, public navParams: NavParams, public inapp:InAppBrowser) {
  }

  openUrl(){
    this.platform.ready().then(() => {
      const browser = this.inapp.create('https://home.nest.com/login/oauth2?client_id=b097c209-6da0-4317-94ed-5a74b1904fea&state=STATE','_self',{location:'no'});
      /*browser.on('exit').subscribe(
        () => {
          console.log(document.getElementsByClassName('oauth2--pincode__label'));
        },
      err => console.error(err));*/
      browser.on('loadstop').subscribe(() => {
        if(document.getElementsByClassName('oauth2--pincode__label')){
          console.log(document.getElementsByClassName('oauth2--pincode__label'));
          this.key = document.getElementsByClassName('oauth2--pincode__label');
          browser.close();
        }
      });
      /*let myModal = this.modalCtrl.create(browser);
      myModal.present();*/

  });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NestPage');
  }

}
