import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { AlertController } from 'ionic-angular';

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
  activityArrullo = {boleta: '', id: ''};

  constructor(public navCtrl: NavController,
              public tasksService: TasksServiceProvider,
              public alertCtrl: AlertController,) {
    this.getAllAlumnos();

  }

  getActivities(){
    this.ActivityDataBase.id = this.arrullo;
    this.ActivityDataBase.boleta = this.activityArrullo.boleta;

    this.tasksService.getActivitiesByUser(this.ActivityDataBase).then(actividades=>{
      this.showAlert("Arrullo","Boleta: "+actividades.boleta,"Aceptar");
      this.Actividades = actividades;
    });

    this.tasksService.getAllActivities().then(actividades=>{
      this.showAlert("Arrullo","Id: "+actividades.Actividad_idActividad,"Aceptar");
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

  showAlert(titulo, contenido, boton) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: [boton]
    });
    alert.present();
  }

}
