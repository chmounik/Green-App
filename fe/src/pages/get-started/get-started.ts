import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the GetStartedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-started',
  templateUrl: 'get-started.html',
})
export class GetStartedPage {

  questions:Array<string>;
  startForm: FormGroup;
  carbonEmission: number;
  submitAttempt: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.carbonEmission = 0;
    this.questions = ['Do you own a car?',
                      'What is your average monthly electric bill?',
                      'Do you have natural gas for heating and/or cooking?',
                      'Have you flown in the last year?',
                      'How big is your home?',
                      'How many people live in your home?'];
    this.startForm = formBuilder.group({
                        car: ['',Validators.compose([Validators.required])],
                        miles:['',Validators.compose([Validators.required,Validators.pattern('[1-9 ]*')])],
                        power:['',Validators.compose([Validators.required,Validators.pattern('[1-9 ]*')])],
                        gas:['',Validators.compose([Validators.required])],
                        therms:['',Validators.compose([Validators.required,Validators.pattern('[1-9 ]*')])],
                        flown:['',Validators.compose([Validators.required])],
                        flymiles:['',Validators.compose([Validators.required,Validators.pattern('[1-9 ]*')])],
                        housearea:['',Validators.compose([Validators.required,Validators.pattern('[1-9 ]*')])],
                        people:['',Validators.compose([Validators.required,Validators.pattern('[1-9 ]*')])]
                    });
  }
  save(){
    this.submitAttempt = true;
    console.log("success!")
    console.log(this.startForm.value);
    this.carbonEmission = 250;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GetStartedPage');
  }

}
