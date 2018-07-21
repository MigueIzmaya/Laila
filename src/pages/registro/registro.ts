import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';



@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  registerCredentials = {nombre: '', usuario: '',password: '', password1: ''};
  maestro = {nombre: '', usuario: '',contrasena: ''};
  maestros: {nombre: '', usuario: '',contrasena: ''}[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public tasksService: TasksServiceProvider) {
  }

  registrar(){

    let registro:any;

    if (this.registerCredentials.password != this.registerCredentials.password1){
      this.showAlert("Contraseña","Las contraseñas no coinciden", "Aceptar");
    } else {
      this.tasksService.getAllMaestrosByUserName(this.registerCredentials.usuario)
      .then(data=>{
        if(data){
            this.showAlert("Nombre de usuario","Ese nombre de usuario ya fue utilizado", "Aceptar");
        } else {
          this.maestro.usuario = this.registerCredentials.usuario;
          this.maestro.nombre = this.registerCredentials.nombre;
          this.maestro.contrasena = this.registerCredentials.password;
          this.showAlert("Nombre de usuario","Todo bien", "Aceptar");
          this.tasksService.insertTableMaestro(this.maestro);
        }

      }).catch(error=>{ this.showAlert("Error","Ocurrio un error al momento de insertar el usuario", "Aceptar"); })



    }
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
