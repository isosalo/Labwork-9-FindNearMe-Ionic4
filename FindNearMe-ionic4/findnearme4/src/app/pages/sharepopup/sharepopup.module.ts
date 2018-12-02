import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharepopupPage } from './sharepopup';

@NgModule({
  declarations: [
    SharepopupPage,
  ],
  imports: [
    IonicPageModule.forChild(SharepopupPage),
  ],
  exports: [
    SharepopupPage
  ]
})
export class SharepopupPageModule {}
