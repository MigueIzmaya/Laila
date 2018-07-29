import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';

@Component({
  selector: 'page-arrullo',
  templateUrl: 'arrullo.html'
})
export class Arrullo {

  Alumnos:any=[];
  arrullo:any = 1;
  Actividades:any=[];
  getActivityDataBase = {fechaInicio: '', duracion: '', calificacion: '', Actividad_idActividad: '', boleta: ''};
  ActivityDataBase = {boleta: '', id: ''};

  constructor(public navCtrl: NavController,
              public tasksService: TasksServiceProvider) {
    this.getAllAlumnos();

  }

  getActivities(){
    this.ActivityDataBase.id = this.arrullo;
    this.tasksService.getActivitiesByUser(this.ActivityDataBase).then(actividades=>{
      this.Actividades = actividades;
    });

  }

  getAllAlumnos(){
    this.tasksService.getAllAlumnos().then(alumnos=>{
      this.Alumnos = alumnos;
    });

  }

  borrar(){
    
  }

}
