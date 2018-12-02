import { Component } from '@angular/core';
import { IonicPage  } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'ListPage';
  tab3Root = 'FavoritePage';
  tab4Root = 'ProfilePage';
  tab5Root = 'SettingsPage';

  constructor() {}
}
