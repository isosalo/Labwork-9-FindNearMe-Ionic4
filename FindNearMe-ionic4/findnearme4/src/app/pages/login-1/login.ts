import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  
  forgotPassword() {
    let forgotpas = this.alertCtrl.create({
      title: 'Forgot password',
      message: "Enter your email address and we'll help you reset your password",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
          }
        }
      ]
    });
    forgotpas.present();
  }
}

/* //Following is a old code (Teacher: Paresh Rathod, Only for Educational Use) -->
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// importing TabsPage here
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  // click will send to next page - TabsPate
  nextPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }


}
*/