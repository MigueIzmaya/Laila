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
  ActividadesAlumno:any=[];
  descripcion:any=[];

  constructor(public navCtrl: NavController,
              public tasksService: TasksServiceProvider,
              public alertCtrl: AlertController,) {
    this.getAllAlumnos();

  }

  getActivities(){

    this.tasksService.getTableActividad().then(descripciones=>{
      this.descripcion = descripciones;
      this.showAlert("Descripcion",descripciones[0].nombre,"Aceptar");
    });

    this.tasksService.getAllActivities().then(actividades=>{
      this.Actividades = actividades;
      for (let index = 0; index < this.Actividades.length; index++){
         if(this.Actividades[index].boleta == this.activityArrullo.boleta){
           this.showAlert("dentro de Actividad",this.Actividades[index].boleta,"Aceptar");
         }
      }
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
