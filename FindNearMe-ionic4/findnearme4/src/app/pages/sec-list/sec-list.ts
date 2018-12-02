import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sec-list',
  templateUrl: 'sec-list.html',
})
export class SecListPage {
tabBarElement: any;
secList:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.secList=[{img:"assets/images/001.png",title:"Restaurant",rate:"5.0"},{img:"assets/images/002.png",title:"Restaurant2",rate:"4.8"},
    {img:"assets/images/003.png",title:"Restaurant3",rate:"4.3"},{img:"assets/images/001.png",title:"Restaurant4",rate:"4.0"}]
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  likeItem(item){
    item.like=!item.like;
  }
  
  sharePopover(myEvent) {
  let popover = this.popoverCtrl.create('SharepopupPage', {}, {cssClass: 'share-popover'});
  popover.present({
      ev: myEvent
  });
  }
}
