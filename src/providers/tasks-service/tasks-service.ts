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
    let sql = 'CREATE TABLE IF NOT EXISTS Alumno(id_alumno INTEGER PRIMARY KEY AUTOINCREMENT, boleta TEXT, nombre TEXT, id_maestro INTEGER, FOREIGN KEY(id_maestro) REFERENCES Maestro(id_maestro))';
    return this.db.executeSql(sql, []);
  }

  createTableMaestro(){
    let sql = 'CREATE TABLE IF NOT EXISTS Maestro(id_maestro INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, contrasena TEXT, nombre TEXT)';
    return this.db.executeSql(sql, []);
  }

  createTableActividadAlumno(){
    let sql = 'CREATE TABLE IF NOT EXISTS ActividadAlumno(id_actividadAlumno INTEGER PRIMARY KEY AUTOINCREMENT, fechaInicio TEXT, duracion INTEGER, calificacion INTEGER, Actividad_idActividad INTEGER, Alumno_idAlumno INTEGER, FOREIGN KEY(Actividad_idActividad) REFERENCES Actividad(id_actividad), FOREIGN KEY(Alumno_idAlumno) REFERENCES Alumno(id_alumno))';
    return this.db.executeSql(sql, []);
  }

  insertTableAlumno(alumno: any){
    let sql = 'INSERT INTO Alumno(id_alumno, boleta, nombre, id_maestro) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, [alumno.id_alumno, alumno.boleta, alumno.nombre, alumno.id_maestro]);
  }

  insertTableMaestro(maestro:any){
    let sql = 'INSERT INTO Maestro(id_maestro, usuario, contrasena, nombre) VALUES(?,?,?)';
    return this.db.executeSql(sql, [maestro.usuario, maestro.contrasena, maestro.nombre])
    .then(response => {
      let Maestro = [];
      for (let index = 0; index < response.rows.length; index ++){
        Maestro.push(response.rows.item(index));
      }
      return Promise.resolve(Maestro);
    })
    .catch(error => Promise.reject(error));
  }

  insertTableActividad(actividad:any){
    let sql = 'INSERT INTO Actividad(id_actividad, usuario, contrasena, nombre, id_alumno) VALUES(?,?,?,?,?)';
    return this.db.executeSql(sql, [actividad.id_actividad, actividad.usuario, actividad.contrasena, actividad.nombre, actividad.id_alumno]);
  }

  insertTableActividadAlumno(actividadAlumno:any){
    let sql = 'INSERT INTO ActividadAlumno(id_actividadAlumno, fechaInicio, duracion, calificacion, Actividad_idActividad, Alumno_idAlumno) VALUES(?,?,?,?,?,?)';
    return this.db.executeSql(sql, [actividadAlumno.id_actividadAlumno, actividadAlumno.fechaInicio, actividadAlumno.duracion, actividadAlumno.calificacion, actividadAlumno.Actividad_idActividad, actividadAlumno.Alumno_idAlumno]);
  }

  getMaestroByUserName(username: string){
    let sql = 'SELECT * FROM Alumno where username = ?';
    return this.db.executeSql(sql,[username])
    .then(response => {
      let Maestro = [];
      for (let index = 0; index < response.rows.length; index ++){
        Maestro.push(response.rows.item(index));
      }
      return Promise.resolve(Maestro);
    })
    .catch(error => Promise.reject(error));

  }

  getAllAlumnos(){
    let sql = 'SELECT * FROM Alumno';
    return this.db.executeSql(sql, [])
    .then(response => {
      let Alumno = [];
      for (let index = 0; index < response.rows.length; index++) {
        Alumno.push( response.rows.item(index) );
      }
      return Promise.resolve( Alumno );
    })
    .catch(error => Promise.reject(error));
  }

  getAll(){
  let sql = 'SELECT * FROM Alumno';
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
