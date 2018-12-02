import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecListPage } from './sec-list';

@NgModule({
  declarations: [
    SecListPage,
  ],
  imports: [
    IonicPageModule.forChild(SecListPage),
  ],
})
export class SecListPageModule {}
