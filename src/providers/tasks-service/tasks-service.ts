import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksServiceProvider {

  db: SQLiteObject = null;
  maestros: {nombre: '', usuario: '',contrasena: ''}[] = [];
  actividades: {id_actividad: '', nombre: '', descripcion: ''}[] = [];

  constructor(public alertCtrl: AlertController) {}

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  createTableActividad(){
    let sql = 'CREATE TABLE IF NOT EXISTS Actividad(id_actividad INTEGER PRIMARY KEY, nombre TEXT, descripcion TEXT)';
    return this.db.executeSql(sql, []);
  }

  createTableAlumno(){
    let sql = 'CREATE TABLE IF NOT EXISTS Alumno(boleta TEXT PRIMARY KEY, nombre TEXT, numero_serie TEXT ,usuario TEXT, FOREIGN KEY(usuario) REFERENCES Maestro(usuario))';
    return this.db.executeSql(sql, []);
  }

  createTableMaestro(){
    let sql = 'CREATE TABLE IF NOT EXISTS Maestro(usuario TEXT PRIMARY KEY, contrasena TEXT, nombre TEXT)';
    return this.db.executeSql(sql, []);
  }

  createTableActividadAlumno(){
    let sql = 'CREATE TABLE IF NOT EXISTS ActividadAlumno(id_actividadAlumno INTEGER PRIMARY KEY AUTOINCREMENT, fechaInicio TEXT, duracion INTEGER, calificacion INTEGER, Actividad_idActividad INTEGER, boleta TEXT, FOREIGN KEY(Actividad_idActividad) REFERENCES Actividad(id_actividad), FOREIGN KEY(boleta) REFERENCES Alumno(boleta))';
    return this.db.executeSql(sql, []);
  }

  insertTableAlumno(alumno: any){
    let sql = 'INSERT INTO Alumno(boleta, nombre, numero_serie, usuario) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, [alumno.boleta, alumno.nombre, alumno.numero_serie, alumno.usuario]);
  }

  insertTableMaestro(maestro:any){
    let sql = 'INSERT INTO Maestro(usuario, contrasena, nombre) VALUES(?,?,?)';
    return this.db.executeSql(sql, [maestro.usuario , maestro.contrasena, maestro.nombre])
    .then(response => {
      let Maestro = [];
      for (let index = 0; index < response.rows.length; index ++){
        this.showAlert("insertTableMaestro",response.rows.item(index),"Positivo");
        Maestro.push(response.rows.item(index));
      }

      return Promise.resolve(Maestro);
    })
    .catch(error => {this.showAlert("insertTableMaestro",error,"Error");}/*Promise.reject(error)*/);
  }

  insertTableActividad(actividad:any){
    let sql = 'INSERT INTO Actividad(id_actividad, nombre, descripcion) VALUES(?,?,?)';
    return this.db.executeSql(sql, [actividad.id_actividad, actividad.nombre, actividad.descripcion]);
  }

  insertTableActividad_1(){
    let sql = 'INSERT INTO Actividad(id_actividad, nombre, descripcion) VALUES(?,?,?)';
    return this.db.executeSql(sql, [0, "Abrigar", "Abrigar"]);
  }

  getTableActividad_1():any{
    let sql = 'SELECT * FROM Actividad WHERE id_actividad = 0';
    return this.db.executeSql(sql,[])
    .then(response => {
      let Actividades = [];
      for (let index = 0; index < response.rows.length; index ++){
        Actividades.push(response.rows.item(index) );
      }

      return Promise.resolve(Actividades);
    })
    .catch(error => {Promise.reject(error)});
  }

  insertTableActividad_2(){
    let sql = 'INSERT INTO Actividad(id_actividad, nombre, descripcion) VALUES(?,?,?)';
    return this.db.executeSql(sql, [1, "Arrullo", "Arrullo"]);
  }

  getTableActividad_2():any{
    let sql = 'SELECT * FROM Actividad WHERE id_actividad = 1';
    return this.db.executeSql(sql, []).then(response => {
      let Actividades = [];
      for (let index = 0; index < response.rows.length; index ++){
        Actividades.push(response.rows.item(index) );
      }

      return Promise.resolve(Actividades);
    })
    .catch(error => {Promise.reject(error)});
  }

  insertTableActividad_3(){
    let sql = 'INSERT INTO Actividad(id_actividad, nombre, descripcion) VALUES(?,?,?)';
    return this.db.executeSql(sql, [2, "Eructar", "Eructar"]);
  }

  getTableActividad_3():any{
    let sql = 'SELECT * FROM Actividad WHERE id_actividad = 2';
    return this.db.executeSql(sql, []).then(response => {
      let Actividades = [];
      for (let index = 0; index < response.rows.length; index ++){
        Actividades.push(response.rows.item(index) );
      }

      return Promise.resolve(Actividades);
    })
    .catch(error => {Promise.reject(error)});
  }

  insertTableActividad_4(){
    let sql = 'INSERT INTO Actividad(id_actividad, nombre, descripcion) VALUES(?,?,?)';
    return this.db.executeSql(sql, [3, "Cambiar el pañal", "Cambiar el pañal"]);
  }

  getActivitiesByUser(boleta:string):any{

    this.showAlert("ActividadAlumno",boleta,"Aceptar");

    let sql = 'SELECT * FROM ActividadAlumno WHERE boleta = ?';
    return this.db.executeSql(sql, [boleta]).then(response => {

      let Actividades = [];
      for (let index = 0; index < response.rows.length; index ++){
        Actividades.push(response.rows.item(index) );
      }

      return Promise.resolve(Actividades);
    })
    .catch(error => {
      this.showAlert("ActividadesUsuarioError",error,"Aceptar");
      Promise.reject(error)});
  }

  getTableActividad_4():any{
    let sql = 'SELECT * FROM Actividad WHERE id_actividad = 3';
    return this.db.executeSql(sql, []).then(response => {
      let Actividades = [];
      for (let index = 0; index < response.rows.length; index ++){
        Actividades.push(response.rows.item(index) );
      }

      return Promise.resolve(Actividades);
    })
    .catch(error => {Promise.reject(error)});
  }

  insertTableActividades(){

    this.getTableActividad_1().then(actividades => {
      this.actividades = actividades;
      if(this.actividades.length < 1){
        this.insertTableActividad_1();
      }
    }).catch(error =>{
      this.showAlert("Error","No se pudo insertar la actividad 1 en la base de datos","Aceptar");
    });


    this.getTableActividad_2().then(actividades => {
      this.actividades = actividades;
      if(this.actividades.length < 1){
        this.insertTableActividad_2();
      }
    }).catch(error =>{
      this.showAlert("Error","No se pudo insertar la actividad 2 en la base de datos","Aceptar");
    });

    this.getTableActividad_3().then(actividades => {
      this.actividades = actividades;
      if(this.actividades.length < 1){
        this.insertTableActividad_3();
      }
    }).catch(error =>{
      this.showAlert("Error","No se pudo insertar la actividad 3 en la base de datos","Aceptar");
    });

    this.getTableActividad_4().then(actividades => {
      this.actividades = actividades;
      if(this.actividades.length < 1){
        this.insertTableActividad_4();
      }
    }).catch(error =>{
      this.showAlert("Error","No se pudo insertar la actividad 4 en la base de datos","Aceptar");
    });

  }

  insertTableActividadAlumno(actividadAlumno:any){
    let sql = 'INSERT INTO ActividadAlumno(fechaInicio, duracion, calificacion, Actividad_idActividad, boleta) VALUES(?,?,?,?,?)';
    return this.db.executeSql(sql, [actividadAlumno.fechaInicio, actividadAlumno.duracion, actividadAlumno.calificacion, actividadAlumno.Actividad_idActividad, actividadAlumno.boleta]). then(result => {
      return result.insertId;
    }).catch(error => {
      this.showAlert("Error","Hubo un errror al momento de insertar la actividad","Aceptar");
    });
  }

  updateTableMaestro(maestro:any){
    let sql = 'UPDATE Maestro SET contrasena=? WHERE usuario=?';
    return this.db.executeSql(sql, [maestro.contrasena, maestro.usuario]);
  }

  updateTableAlumno(alumno:any){
    let sql = 'UPDATE Alumno SET numero_serie=? WHERE boleta=?';
    return this.db.executeSql(sql, [alumno.numero_serie, alumno.boleta]);
  }

  getNumeroSerieByBoleta(boleta:string){
    let sql = 'SELECT numero_serie FROM Alumno where boleta = ?';
    return this.db.executeSql(sql,[boleta])
    .then(response => {
      let Alumno = [];
      for (let index = 0; index < response.rows.length; index ++){
        Alumno.push(response.rows.item(index) );
      }

      return Promise.resolve(Alumno);
    })
    .catch(error => {Promise.reject(error)});
  }

  getMaestroByUserName(username: String): any {
    let sql = 'SELECT * FROM Maestro where usuario = ?';
    return this.db.executeSql(sql,[username])
    .then(response => {
      let Maestro = [];
      for (let index = 0; index < response.rows.length; index ++){
        Maestro.push(response.rows.item(index) );
      }

      return Promise.resolve(Maestro);
    })
    .catch(error => {Promise.reject(error)});
  }

  getAllMaestrosByUserNameAndPassword(usuario:String, contrasena: String): any {
    return this.getMaestroByUserName(usuario)
    .then(maestros => {
      this.maestros = maestros;
      for (let index = 0; index < this.maestros.length; index++){
         if(this.maestros[index].contrasena === contrasena){
           return true;
         }
      }
      return false;
    }).catch(error =>{
      return false;
    });
  }

  getAllMaestrosByUserName(usuario:String){
    return this.getMaestroByUserName(usuario)
    .then(maestros => {
      this.maestros = maestros;
      for (let index = 0; index < this.maestros.length; index++){
         if(this.maestros[index].usuario === usuario){
           return true;
         }
      }
      return false;
    }).catch(error =>{
      return false;
    });

  }

  getAllActivities():any{
    let sql = 'SELECT * FROM ActividadAlumno';
    return this.db.executeSql(sql,[])
    .then(response => {
      let Actividades = [];
      for (let index = 0; index < response.rows.length; index ++){
        Actividades.push(response.rows.item(index) );
      }

      return Promise.resolve(Actividades);
    })
    .catch(error => {Promise.reject(error)});

  }


  getAllMaestros(): any{
    let sql = 'SELECT * FROM Maestro';
    return this.db.executeSql(sql,[])
    .then(response => {
      let Maestro = [];
      for (let index = 0; index < response.rows.length; index ++){
        Maestro.push(response.rows.item(index) );
      }

      return Promise.resolve(Maestro);
    })
    .catch(error => {Promise.reject(error)});
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

  dropTableActividades(){
    let sql = 'DROP TABLE Actividad';
    return this.db.executeSql(sql, []);
  }

  dropTableAlumno(){
    let sql = 'DROP TABLE Alumno'
    return this.db.executeSql(sql,[]);
  }

  dropTableMaestro(){
    let sql = 'DROP TABLE Maestro'
    return this.db.executeSql(sql,[]);
  }

  dropTableActividadAlumno(){
    let sql = 'DROP TABLE ActividadAlumno'
    return this.db.executeSql(sql,[]);
  }

  getTableActividad():any{
    let sql = 'SELECT * FROM Actividad';
    return this.db.executeSql(sql,[])
    .then(response => {
      let Actividades = [];
      for (let index = 0; index < response.rows.length; index ++){
        Actividades.push(response.rows.item(index) );
      }

      return Promise.resolve(Actividades);
    })
    .catch(error => {Promise.reject(error)});

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



showAlert(titulo, contenido, boton) {
  let alert = this.alertCtrl.create({
    title: titulo,
    subTitle: contenido,
    buttons: [boton]
  });
  alert.present();
}

}
