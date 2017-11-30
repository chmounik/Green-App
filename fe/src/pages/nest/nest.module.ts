import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NestPage } from './nest';

@NgModule({
  declarations: [
    NestPage,
  ],
  imports: [
    IonicPageModule.forChild(NestPage),
  ],
})
export class NestPageModule {}
