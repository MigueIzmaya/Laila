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
  registerActivityDataBase = {fechaInicio: '', duracion: '', calificacion: '', Actividad_idActividad: '', boleta: ''};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public tasksService: TasksServiceProvider) {
                this.getAllAlumnos();

  }

  registrar_actividad(){
    this.registerActivityDataBase.fechaInicio = this.registerActivity.miDia + " " + this.registerActivity.miHora;
    this.registerActivityDataBase.duracion = this.registerActivity.duracion;
    this.registerActivityDataBase.Actividad_idActividad = this.registerActivity.activity;
    this.registerActivityDataBase.boleta = null;
    this.tasksService.insertTableActividadAlumno(this.registerActivityDataBase);
    this.showAlert("Actividad","Actividad registrada con éxito","Aceptar");
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
