import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar, StatusBarOriginal } from '@ionic-native/status-bar';
import { SplashScreen, SplashScreenOriginal } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';

const config = {
      backButtonText: '',
      backButtonIcon: 'md-arrow-back',
      iconMode: 'ios',
      pageTransition: 'ios',
      mode: 'ios',
      tabsPlacement: 'top'
    };

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBarOriginal,
    SplashScreenOriginal,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
