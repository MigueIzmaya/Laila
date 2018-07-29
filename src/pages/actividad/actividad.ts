import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';



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
              public tasksService: TasksServiceProvider) {
                this.getAllAlumnos();

  }

  registrar_actividad(){
    this.registerAlumnoDatabase.boleta = this.registerActivity.activity;
    this.registerAlumnoDatabase.nombre = this.registerActivity.nombre;
    this.registerAlumnoDatabase.numero_serie = null;
    this.registerAlumnoDatabase.usuario = this.nombreUsuarioMaestro;
    this.tasksService.insertTableAlumno(this.registerAlumnoDatabase);
  }

  getAllAlumnos(){
    this.tasksService.getAllAlumnos().then(alumnos=>{
      this.Alumnos = alumnos;
    });
  }


}
