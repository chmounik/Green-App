import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WemoProvider } from '../../providers/wemo/wemo';

/**
 * Generated class for the WemoDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wemo-details',
  templateUrl: 'wemo-details.html',
})
export class WemoDetailsPage {

  wemoData: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private wemoProvider: WemoProvider ) {
    //this.wemoProvider.getWemoData().then(wemoData => { this.wemoData = wemoData;});
    this.wemoData = this.wemoProvider.getWemoData().subscribe(data => {this.wemoData = data.json();});
    //console.log(JSON.stringify(this.wemoData));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WemoDetailsPage');
  }

}
