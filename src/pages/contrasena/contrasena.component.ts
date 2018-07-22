import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';

@Component({
  selector: 'page-contrasena',
  templateUrl: 'contrasena.html'
})
export class Contrasena {

  registerPassword = {oldPassword: '', newPassword: '', newPassword2: ''};
  maestro = {usuario: '', contrasena: ''}
  idMaestro:any;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public tasksService: TasksServiceProvider,
              private navParams: NavParams) {

                this.idMaestro = navParams.get("idMaestro");
  }

  cambiar_contrasena(){

    if(this.registerPassword.newPassword != this.registerPassword.newPassword2){
      this.showAlert("Error","Las contraseñas no coinciden","Aceptar");
    } else {
      this.maestro.usuario = this.idMaestro;
      this.maestro.contrasena = this.registerPassword.newPassword;
      this.tasksService.updateTableMaestro(this.maestro);
      this.showAlert("Contraseña","Contraseña cambiada con éxito","Aceptar");
      this.irAtras();
    }
  }

  irAtras(){
    this.navCtrl.pop();
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
