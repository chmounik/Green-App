import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionProvider } from '../../providers/question/question';

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
  @ViewChild(Content) content: Content;
  startForm: FormGroup;
  carbonEmission: number;
  submitAttempt: Boolean;
  questiondata : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
                                                     public questionService:QuestionProvider ) {
    this.carbonEmission = 0;
                    this.questionService.getQuestions(JSON.parse(localStorage.getItem('currentUser')).username).subscribe(
                      res => {
                        //console.log(res.length);
                        if(res.response[0]){
                        this.questiondata = res;
                        this.startForm.patchValue({
                          car: res.response[0].car,
                          miles:parseInt(res.response[0].miles),
                          power:parseInt(res.response[0].power),
                          gas: res.response[0].gas,
                          therms:parseInt(res.response[0].therms),
                          flown:res.response[0].flown,
                          flymiles:parseInt(res.response[0].flymiles),
                          housearea:parseInt(res.response[0].housearea),
                          people:parseInt(res.response[0].people),
                          score: parseInt(res.response[0].score)
                        });
                      this.carbonEmission = parseInt(res.response[0].score)
                    }
                  },
                      err => console.log(err)
                    );
                    this.startForm = formBuilder.group({
                      car: ['',Validators.compose([Validators.required])],
                      miles:['',Validators.compose([Validators.pattern('[1-9 ]*')])],
                      power:['',Validators.compose([Validators.required,Validators.pattern('[1-9 ]*')])],
                      gas:['',Validators.compose([Validators.required])],
                      therms:['',Validators.compose([Validators.pattern('[1-9 ]*')])],
                      flown:['',Validators.compose([Validators.required])],
                      flymiles:['',Validators.compose([Validators.pattern('[1-9 ]*')])],
                      housearea:['',Validators.compose([Validators.required,Validators.pattern('[1-9 ]*')])],
                      people:['',Validators.compose([Validators.required,Validators.pattern('[1-9 ]*')])]
                  });
    this.startForm.get('car').valueChanges.subscribe(
        (car: string) => {
              if (car === 'yes') {
                    this.startForm.get('miles').setValidators([Validators.required, Validators.pattern('[1-9]*')]);
              }
              else{
                this.startForm.get('miles').setValidators([Validators.pattern('[1-9 ]*')]);
              }
              this.startForm.get('miles').updateValueAndValidity();
        }  
    )
    this.startForm.get('gas').valueChanges.subscribe(
      (gas: string) => {
            if (gas === 'yes') {
                  this.startForm.get('therms').setValidators([Validators.required]);
            }
              else{
                this.startForm.get('therms').setValidators([Validators.pattern('[1-9 ]*')]);
              }
            this.startForm.get('therms').updateValueAndValidity();
      }  
    )
    this.startForm.get('flown').valueChanges.subscribe(
      (gas: string) => {
            if (gas === 'yes') {
                  this.startForm.get('flymiles').setValidators([Validators.required]);
            }
            else{
              this.startForm.get('flymiles').setValidators([Validators.pattern('[1-9 ]*')]);
            }
            this.startForm.get('flymiles').updateValueAndValidity();
      }  
    )
  }
  save(){
    this.carbonEmission = 0;
    this.submitAttempt = true;
    if(this.startForm.get('car').value !== 'no'){
      this.carbonEmission += 2711 ;
    }
    if(this.startForm.get('gas').value !== 'no'){
      this.carbonEmission += ((parseInt(this.startForm.get('therms').value) * 15.5)); 
    }
    if(this.startForm.get('flown').value !== 'no'){
      this.carbonEmission += (parseInt(this.startForm.get('flymiles').value) * 0.483) ; 
    }
    this.carbonEmission += ((parseInt(this.startForm.get('power').value) * 0.9 * 12) / 1.07);
    this.carbonEmission = (this.carbonEmission | 0) * 2.2;
    let formData = {
      username : JSON.parse(localStorage.getItem('currentUser')).username,
      car: this.startForm.get('car').value,
      miles: this.startForm.get('miles').value,
      power: this.startForm.get('power').value,
      gas: this.startForm.get('gas').value,
      therms: this.startForm.get('therms').value,
      flown: this.startForm.get('flown').value,
      flymiles: this.startForm.get('flymiles').value,
      housearea: this.startForm.get('housearea').value,
      people: this.startForm.get('people').value,
      score : this.carbonEmission
    }

    this.questionService.insertQuestions(formData).subscribe(
                    res => console.log(res),
                    errmsg => console.log(errmsg));
                    this.content.scrollToTop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GetStartedPage');
  }

}
