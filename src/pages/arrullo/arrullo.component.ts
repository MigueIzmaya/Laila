import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { AlertController } from 'ionic-angular';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';

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
  GetActividades = {boleta: '', idActividad: ''}
  activityArrullo = {boleta: '', id: ''};
  ActividadesAlumno:any=[];
  descripcion:any=[];
  vriable1:any;
  variable2:any;

  constructor(public navCtrl: NavController,
              public tasksService: TasksServiceProvider,
              public alertCtrl: AlertController,
              public bluetooth: BluetoothProvider){
    this.getAllAlumnos();

  }

  getActivities(){
    this.tasksService.getTableActividad().then(descripciones=>{
      this.descripcion = descripciones;
    });
    // JSON.stringify(YOUR_OBJECT_HERE, null, 4)

    this.tasksService.getActivitiesByUser(this.activityArrullo.boleta).then(actividades=>{
      this.Actividades = actividades;
      for (let index = 0; index < this.Actividades; index++){
        this.GetActividades.boleta = this.Actividades[index].boleta;
        this.GetActividades.idActividad = this.Actividades[index].id_actividadAlumno;
        this.bluetooth.write("2").then(res=>{
          if(res){
            this.bluetooth.write(JSON.stringify(this.GetActividades)).then(res=>{
              if(res){
                this.bluetooth.read().then(res=>{

                })
              }
            })
          }
        });
      }


      /*for (let index = 0; index < this.Actividades.length; index++){
         if(Number(this.Actividades[index].boleta) == Number(this.activityArrullo.boleta)){

         }
      }*/
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
