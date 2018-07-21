import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-altalumno',
  templateUrl: 'altalumno.html'
})
export class AltaAlumno {

  boleta: string;
  nombre: string;
  nombreUsuarioMaestro: any;

  registerAlumno = {boleta: '', nombre: ''};
  registerAlumnoDatabase = {boleta: '', nombre: '', numero_serie: '', usuario: ''};

  constructor(public navCtrl: NavController,
              public tasksService: TasksServiceProvider,
              public alertCtrl: AlertController,
              private navParams: NavParams) {

              this.nombreUsuarioMaestro = navParams.get("idMaestro");

  }

  registrar_alumno(){
    this.registerAlumnoDatabase.boleta = this.registerAlumno.boleta;
    this.registerAlumnoDatabase.nombre = this.registerAlumno.nombre;
    this.registerAlumnoDatabase.numero_serie = null;
    this.registerAlumnoDatabase.usuario = this.nombreUsuarioMaestro;
    this.tasksService.insertTableAlumno(this.registerAlumnoDatabase).then();
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
