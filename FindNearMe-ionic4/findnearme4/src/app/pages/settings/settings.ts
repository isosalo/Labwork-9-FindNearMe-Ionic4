import { Component } from '@angular/core';
import { IonicPage, NavController, App  } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public app: App) {
  }
  openprofile(){
    this.navCtrl.parent.select(3);
  }
  logout(){
   this.app.getRootNav().setRoot('LoginPage');
  }
  
}
