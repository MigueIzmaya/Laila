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
  ActivityDataBase = {Actividad_idActividad: '', boleta: ''};



  activityArrullo = {boleta: '', id: ''};

  constructor(public navCtrl: NavController,
              public tasksService: TasksServiceProvider,
              public alertCtrl: AlertController,) {
    this.getAllAlumnos();

  }

  getActivities(){
    this.ActivityDataBase.Actividad_idActividad = this.arrullo;
    this.ActivityDataBase.boleta = this.activityArrullo.boleta;

    /*this.tasksService.getActivitiesByUser(this.ActivityDataBase).then(actividades=>{

      this.Actividades = actividades;

      this.showAlert("Arrullo","Boleta: "+this.Actividades[0].boleta,"Aceptar");
    });*/

    this.tasksService.getAllActivities().then(actividades=>{

      this.Actividades = actividades;
      this.showAlert("Arrullo","Id: "+this.Actividades[0].Actividad_idActividad,"Aceptar");
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
