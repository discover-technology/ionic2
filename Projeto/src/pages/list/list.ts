import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'list-example',
  templateUrl: 'list.html'
})
export class List {

   items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];
  
  constructor(public alertCtrl: AlertController) {

  }

  itemSelected(item: string){
       let alert = this.alertCtrl.create({
      title: 'Você clicou em: ',
      subTitle: item,
      buttons: ['OK']
    });
    alert.present();
  }
  
}
