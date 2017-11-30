import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GetStartedPage } from '../pages/get-started/get-started';
import { WemoDetailsPage } from '../pages/wemo-details/wemo-details';
import { NestPage } from '../pages/nest/nest';
import { LogoutPage } from '../pages/logout/logout';

/* Welcome & Login imports */

import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WemoProvider } from '../providers/wemo/wemo';
import { SignupProvider } from '../providers/signup/signup';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { QuestionProvider } from '../providers/question/question';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    GetStartedPage,
    WemoDetailsPage,
    NestPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    GetStartedPage,
    WemoDetailsPage,
    NestPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WemoProvider,
    SignupProvider,
    AuthenticationProvider,
    QuestionProvider,
    InAppBrowser,
    SocialSharing
  ]
})
export class AppModule {}
