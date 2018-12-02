import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sharepopup',

   template: `
      <ion-row class="shareIcon">
        <ion-col>
           <ion-icon name="logo-whatsapp"></ion-icon>
        </ion-col>
        <ion-col>
           <ion-icon name="logo-facebook"></ion-icon>
        </ion-col>
        <ion-col>
           <ion-icon name="logo-twitter"></ion-icon>
        </ion-col>
        <ion-col>
           <ion-icon name="logo-googleplus"></ion-icon>
        </ion-col>
      </ion-row>
  `
})
export class SharepopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharepopupPage');
  }

  close() {
  this.viewCtrl.dismiss();
  }

}
