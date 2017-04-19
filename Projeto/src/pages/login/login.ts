import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'login-example',
  templateUrl: 'login.html'
})
export class Login {
  
  constructor(public navCtrl: NavController) { }
  
  login(){
    this.navCtrl.setRoot(HomePage);
  }
 
}
