import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()
export class Todos {

  data: any;
  db: any;
  remote: any;
  todo: any

  constructor() {
    this.db = new PouchDB('phonebook');

    this.remote = 'http://webdev.discover.com.br:10000/couchdb/phonebook';

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.db.sync(this.remote, options);
  }

  insert(todo) {
     this.db.post(todo);
  }
  
  getTodos() {
 
  if (this.data) {
    return Promise.resolve(this.data);
  }
 
  return new Promise(resolve => {
 
    this.db.allDocs({
 
      include_docs: true
 
    }).then((result) => {
 
      this.data = [];
 
      let docs = result.rows.map((row) => {
        this.data.push(row.doc);
      });
 
      resolve(this.data);
 
      this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
        this.handleChange(change);
      });
 
    }).catch((error) => {
 
      console.log(error);
 
    }); 
 
  });
 
}
  
  handleChange(change){
 
  let changedDoc = null;
  let changedIndex = null;
 
  this.data.forEach((doc, index) => {
 
    if(doc._id === change.id){
      changedDoc = doc;
      changedIndex = index;
    }
 
  });
 
  //A document was deleted
  if(change.deleted){
    this.data.splice(changedIndex, 1);
  } 
  else {
 
    //A document was updated
    if(changedDoc){
      this.data[changedIndex] = change.doc;
    } 
 
    //A document was added
    else {
      this.data.push(change.doc); 
    }
 
  }
 
}
}
