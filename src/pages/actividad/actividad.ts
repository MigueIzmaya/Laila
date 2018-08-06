import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { AlertController } from 'ionic-angular';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';

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
  fecha: Date = new Date();
  registerActivity = {miDia: '', miHora: '', activity: '', alumno: '', duracion: ''};
  registerActivityDataBase = {fechaInicio: '', duracion: '', calificacion: '', Actividad_idActividad: '', boleta: '', idActividad: ''};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public tasksService: TasksServiceProvider,
            /*public bluetooth: BluetoothProvider*/) {
                this.getAllAlumnos();

  }

  registrar_actividad(){
    this.registerActivityDataBase.fechaInicio = this.registerActivity.miDia + " " + this.registerActivity.miHora;
    this.registerActivityDataBase.duracion = this.registerActivity.duracion;
    this.registerActivityDataBase.Actividad_idActividad = this.registerActivity.activity;
    this.registerActivityDataBase.boleta = this.registerActivity.alumno;
    this.tasksService.insertTableActividadAlumno(this.registerActivityDataBase).then(res=>{
        this.registerActivityDataBase.idActividad = res;

    });



    /*if(this.bluetooth.isConnect() == true){
      if(this.bluetooth.write("0")){
          if(this.bluetooth.write(this.getCurrentDate())){
            if(this.bluetooth.write("1")){

            } else {


            }
          } else {

          }
      } else {

      }
    }*/

    //this.getCurrentDate();
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

  getCurrentDate(){
    let fechaFormat:any = [this.fecha.getFullYear(),
               this.fecha.getMonth()+1,
               this.fecha.getDate()].join('-')+' '+
              [this.fecha.getHours(),
               this.fecha.getMinutes(),
               this.fecha.getSeconds()].join(':');
    return fechaFormat;
  }
}
