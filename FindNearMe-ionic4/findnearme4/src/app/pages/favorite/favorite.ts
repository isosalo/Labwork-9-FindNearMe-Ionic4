import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
secList:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.secList=[{img:"assets/images/001.png",title:"Restraurant",rate:"5.0"},{img:"assets/images/002.png",title:"Grocery Store",rate:"4.8"},
    {img:"assets/images/003.png",title:"Fruit Market",rate:"4.3"},{img:"assets/images/001.png",title:"Super Market",rate:"4.0"}]
  }
  deleteItem(item) {
    this.secList.splice(this.secList.indexOf(item), 1);
  }

  sharePopover(myEvent) {
  let popover = this.popoverCtrl.create('SharepopupPage', {}, {cssClass: 'share-popover'});
  popover.present({
      ev: myEvent
  });
  }
}
