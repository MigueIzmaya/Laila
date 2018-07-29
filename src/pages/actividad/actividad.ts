import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-actividad',
  templateUrl: 'actividad.html',
})

export class Actividad {

  miDia:any;
  miHora:any;
  activity:any;
  actividades:any[][];
  Alumnos:any=[];
  registerActivity = {miDia: '', miHora: '', activity: '', alumno: '', duracion: ''};
  registerActivityDataBase = {miDia: '', miHora: '', activity: '', alumno: ''};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public tasksService: TasksServiceProvider) {
                this.getAllAlumnos();

  }

  registrar_actividad(){

    /*ActividadAlumno(id_actividadAlumno INTEGER PRIMARY KEY AUTOINCREMENT, fechaInicio TEXT, duracion INTEGER, calificacion INTEGER, Actividad_idActividad INTEGER, boleta TEXT, FOREIGN KEY(Actividad_idActividad) REFERENCES Actividad(id_actividad)
    this.registerAlumnoDatabase.boleta = this.registerActivity.activity;
    this.registerAlumnoDatabase.nombre = this.registerActivity.nombre;
    this.registerAlumnoDatabase.numero_serie = null;
    this.registerAlumnoDatabase.usuario = this.nombreUsuarioMaestro;
    this.tasksService.insertTableAlumno(this.registerAlumnoDatabase);*/
    this.showAlert("AltaActividad",this.registerActivity.miDia,"Aceptar");
    this.showAlert("AltaActividad",this.registerActivity.miHora,"Aceptar");
  }

  getAllAlumnos(){
    this.tasksService.getAllAlumnos().then(alumnos=>{
      this.Alumnos = alumnos;
    });
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
