import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { QuestionProvider } from '../../providers/question/question';
import { GetStartedPage } from '../get-started/get-started';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('doughCanvas') doughCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  doughChart : any;
  lineChart : any;
  currentScore : any;
  notyetSetup : boolean;
  constructor(public navCtrl: NavController,public socialSharing:SocialSharing,public questionService:QuestionProvider) {
      this.questionService.getQuestions(JSON.parse(localStorage.getItem('currentUser')).username).subscribe(res =>{
                                              if(res.response[0]){
                                                this.currentScore = parseInt(res.response[0].score);
                                                this.notyetSetup = false;
                                              }
                                              else{
                                                this.notyetSetup = true;
                                                this.currentScore = 0;
                                              }},
                                              err => console.log(err)
                                            );
  }

  shareSheetShare() {
    this.socialSharing.share("Share message", "Share subject", "URL to file or image", "A URL to share").then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }

  getStarted(){
    this.navCtrl.push(GetStartedPage);
  }

  ionViewDidLoad(){
    this.doughChart = new Chart(this.doughCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Water Heating", "Air Conditioning", "Heating", "Refrigerator", "Electronics, Lighting, and others"],
        datasets: [{
            label: 'US Average',
            data: [18, 6, 42, 5, 30],
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
        }]
      }
  });

  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
      datasets: [
          {
              label: "Energy Efficient",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [575,500,450,425,400,500,650,700,575,550,425,500],
              spanGaps: false,
          },
          {
              label: "Average",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255,51,0,0.4)",
              borderColor: "rgba(255,51,0,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255,51,0,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(255,51,0,1)",
              pointHoverBorderColor: "rgba(255,51,0,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [900,800,700,650,625,700,900,975,825,800,650,750],
              spanGaps: false,
          },
          {
            label: "My Average",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(51, 204, 51,0.4)",
            borderColor: "rgba(51, 204, 51,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(51, 204, 51,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(51, 204, 51,1)",
            pointHoverBorderColor: "rgba(51, 204, 51,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [600,650,320,420,500,350,450,525,675,800,435,875],
            spanGaps: false,
        }
      ]
    }

});
  }

}
