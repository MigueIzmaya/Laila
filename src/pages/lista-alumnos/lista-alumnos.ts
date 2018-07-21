import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';

@Component({
  selector: 'page-lista-alumnos',
  templateUrl: 'lista-alumnos.html',
})
export class ListaAlumnos {

  Alumnos:any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tasksService: TasksServiceProvider,
              public alertCtrl: AlertController) {

                this.getAllAlumnos();
  }

  getAllAlumnos(){
    this.tasksService.getAllAlumnos().then(alumnos=>{
      this.Alumnos = alumnos;

      for (let index = 0; index < this.Alumnos.length; index++){
         this.showAlert("Mostrando alumnos",this.Alumnos[index].nombre,"Aceptar");
      }

    })

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
