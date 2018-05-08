import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

import { SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksServiceProvider {

  db: SQLiteObject = null;

  constructor() {}

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  createTableActividad(){
    let sql = 'CREATE TABLE IF NOT EXISTS Actividad(id_actividad INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, descripcion TEXT)';
    return this.db.executeSql(sql, []);
  }

  createTableAlumno(){
    let sql = 'CREATE TABLE IF NOT EXISTS Alumno(id_alumno INTEGER PRIMARY KEY AUTOINCREMENT, boleta TEXT, nombre TEXT, completed INTEGER)';
    return this.db.executeSql(sql, []);
  }

  createTableMaestro(){
    let sql = 'CREATE TABLE IF NOT EXISTS Maestro(id_maestro INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, contrasena TEXT, nombre TEXT)';
    return this.db.executeSql(sql, []);
  }

  createTableActividadAlumno(){
    let sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
  let sql = 'SELECT * FROM tasks';
  return this.db.executeSql(sql, [])
  .then(response => {
    let tasks = [];
    for (let index = 0; index < response.rows.length; index++) {
      tasks.push( response.rows.item(index) );
    }
    return Promise.resolve( tasks );
  })
  .catch(error => Promise.reject(error));
}

create(task: any){
  let sql = 'INSERT INTO tasks(title, completed) VALUES(?,?)';
  return this.db.executeSql(sql, [task.title, task.completed]);
}

update(task: any){
  let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
  return this.db.executeSql(sql, [task.title, task.completed, task.id]);
}

delete(task: any){
  let sql = 'DELETE FROM tasks WHERE id=?';
  return this.db.executeSql(sql, [task.id]);
}

}
