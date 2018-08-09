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
              public bluetooth: BluetoothProvider) {
                this.getAllAlumnos();

  }

  registrar_actividad(){
    this.registerActivityDataBase.fechaInicio = this.registerActivity.miDia + " " + this.registerActivity.miHora;
    this.registerActivityDataBase.duracion = this.registerActivity.duracion;
    this.registerActivityDataBase.Actividad_idActividad = this.registerActivity.activity;
    this.registerActivityDataBase.boleta = this.registerActivity.alumno;

    this.bluetooth.isConnect().then(con=>{
      if(!con){
        this.tasksService.getNumeroSerieByBoleta(this.registerActivityDataBase.boleta).then(res=>{

          //if(res != []){
            this.showAlert("Conectar",JSON.stringify(res, null, 4),"Aceptar");
            this.showAlert("Conectar2",res[0].numero_serie,"Aceptar");
            this.bluetooth.connect(res[0].numero_serie).then(con=>{
            });
          //}
        });
      }
    });



    this.bluetooth.isConnect().then(res =>{
      if(res){

        this.tasksService.insertTableActividadAlumno(this.registerActivityDataBase).then(res=>{
          this.showAlert("insert",JSON.stringify(res, null, 4),"Aceptar");
            this.registerActivityDataBase.idActividad = res;
            this.showAlert("insert2",JSON.stringify(this.registerActivityDataBase.idActividad, null, 4),"Aceptar");
            this.bluetooth.write("0").then(res=> {
              if(res){
                this.bluetooth.write(this.getCurrentDate()).then(res=>{
                  if (res){
                    this.bluetooth.write("1").then(res=>{
                      if(res){
                        this.bluetooth.write(JSON.stringify(this.registerActivityDataBase)).then(res=>{
                          if(res){
                            this.showAlert("Actividad","Actividad registrada con éxito","Aceptar");
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
        });
      } else {
        this.showAlert("Actividad","Por favor antes de registrar, entra a la sección Bluetooth","Aceptar");
      }
    });
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
