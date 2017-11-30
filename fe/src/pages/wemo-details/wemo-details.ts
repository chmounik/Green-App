import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WemoProvider } from '../../providers/wemo/wemo';
import { Chart } from 'chart.js';

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
  @ViewChild('doughCanvas') doughCanvas; 
  doughChart : any;
  wemoData: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private wemoProvider: WemoProvider ) {
    //this.wemoProvider.getWemoData().then(wemoData => { this.wemoData = wemoData;});
    this.wemoData = this.wemoProvider.getWemoData().subscribe(data => {this.wemoData = data.json();});
    //console.log(JSON.stringify(this.wemoData));
  }

  ionViewDidLoad() {
    this.doughChart = new Chart(this.doughCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Water Heating", "Air Conditioning", "Heating", "Refrigerator", "Electronics, Lighting, and others"],
        datasets: [{
            label: 'My Average based on Wemo',
            data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384",
              "#36A2EB"
          ]
        }],
        options: {
          responsive: true,
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: 'Chart.js Doughnut Chart'
          },
          animation: {
              animateScale: true,
              animateRotate: true
          }
      }
      }
  });
  }

}
