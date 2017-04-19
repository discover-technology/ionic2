import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { MyApp } from './app.component';
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
import { Modal, ModalContentPage } from '../pages/modal/modal';
import { Radio } from '../pages/radio/radio';
import { Range } from '../pages/range/range';
import { SearchBar } from '../pages/searchbar/searchbar';
import { Select } from '../pages/select/select';
import { Crud } from '../pages/crud/crud';

import { Login } from '../pages/login/login';

import { Todos } from '../providers/todos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Button,
    Checkbox,
    Card,
    DateTime,
    FABs,
    Grid,
    Input,
    List,
    Loading,
    Modal,
    ModalContentPage,
    Radio,
    Range,
    SearchBar,
    Select,
    Login,
    Crud
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    TextMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Button,
    Checkbox,
    Card,
    DateTime,
    FABs,
    Grid,
    Input,
    List,
    Loading,
    Modal,
    ModalContentPage,
    Radio,
    Range,
    SearchBar,
    Select,
    Login,
    Crud
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Todos
  ]
})
export class AppModule {}
