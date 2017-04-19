import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Button } from '../pages/button/button';
import { Checkbox } from '../pages/checkbox/checkbox';
import { Card } from '../pages/card/card';
import { DateTime } from '../pages/datetime/datetime';
import { FABs } from '../pages/fabs/fabs';
import { Grid } from '../pages/grid/grid';
import { Input } from '../pages/input/input';
import { List } from '../pages/list/list';
import { Loading } from '../pages/loading/loading';
import { Modal } from '../pages/modal/modal';
import { Radio } from '../pages/radio/radio';
import { Range } from '../pages/range/range';
import { SearchBar } from '../pages/searchbar/searchbar';
import { Select } from '../pages/select/select';
import { Crud } from '../pages/crud/crud';

import { Login } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = Login;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public menu: MenuController,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
    ) {
    this.initializeApp();
       // set our app's pages
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Crud', component: Crud },
      { title: 'Botões', component: Button },
      { title: 'Checkbox\'s', component: Checkbox },
      { title: 'Cards', component: Card },
      { title: 'Campos de Data', component: DateTime },
      { title: '(FABs) Botões Flutuantes', component: FABs },
      { title: 'Grid', component: Grid },
      { title: 'Input', component: Input },
      { title: 'List', component: List },
      { title: 'Carregando', component: Loading },
      { title: 'Modal', component: Modal },
      { title: 'Radio', component: Radio },
      { title: 'Range', component: Range },
      { title: 'Barra de Pesquisa', component: SearchBar },
      { title: 'Seleção', component: Select }
    ];
}

    initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}