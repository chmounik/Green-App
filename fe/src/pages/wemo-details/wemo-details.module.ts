import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WemoDetailsPage } from './wemo-details';

@NgModule({
  declarations: [
    WemoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WemoDetailsPage),
  ],
})
export class WemoDetailsPageModule {}
