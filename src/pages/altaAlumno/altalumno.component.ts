import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-altalumno',
  templateUrl: 'altalumno.html'
})
export class AltaAlumno {

  boleta: string;
  nombre: string;

  registerAlumno = {boleta: '', nombre: ''};

  constructor(public navCtrl: NavController,
              public tasksService: TasksServiceProvider,
              public alertCtrl: AlertController) {

  }

  registrar_alumno(){
    

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
