import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Todos } from '../../providers/todos';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'crud-example',
  templateUrl: 'crud.html'
})


export class Crud {
  todos: any;
  public phoneBookForm = this.fb.group({
    name: ["", Validators.required],
    phone: ["", Validators.required]
  });
public mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  constructor(public navCtrl: NavController, public todoService: Todos, public alertCtrl: AlertController, public fb: FormBuilder) {

  }
  
  ionViewDidLoad(){
 
    this.todoService.getTodos().then((data) => {
      this.todos = data;
    });
 
  }

  insert(event) {
    this.todoService.insert(this.phoneBookForm.value);

  }


}
