import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
tabBarElement: any;
selecttype:any;
icons:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
      this.icons = ['star', 'star', 'star', 'star-half', 'star-outline'];  
  }

  showMap(index){
    this.selecttype=index;
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
  
  sharePopover(myEvent) {
  let popover = this.popoverCtrl.create('SharepopupPage', {}, {cssClass: 'share-popover'});
  popover.present({
      ev: myEvent
  });
  }

}
