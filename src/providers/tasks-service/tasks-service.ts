import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksServiceProvider {

  db: SQLite = null;

  constructor() {
    this.db = new SQLite();
    console.log('Hello TasksServiceProvider Provider');
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT)'
  }

  /*openDatabase(){
    return this.db.openDatabase({
      name: 'data.db',
      location: 'default'
    });
  }*/

}
