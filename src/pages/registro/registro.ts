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
  valor:any;
  maestro = {nombre: '', usuario: '',contrasena: ''};
  maestros: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public tasksService: TasksServiceProvider) {
  }

  registrar(){

    if (this.registerCredentials.password != this.registerCredentials.password1){
      this.showAlert("Contraseña","Las contraseñas no coinciden", "Aceptar");
    }else if(this.getMaestros(this.registerCredentials.usuario)){
      this.showAlert("Nombre de usuario","Ese nombre de usuario ya fue utilizado", "Aceptar");
    }else {
      this.maestro.usuario = this.registerCredentials.usuario;
      this.maestro.contrasena = this.registerCredentials.password;
      this.maestro.nombre = this.registerCredentials.nombre;
      this.tasksService.insertTableMaestro(this.maestro);/*.then(response => {
        this.valor = response;
      }).catch(error =>{
        this.valor = error;
      });*/

    }

  }

  getMaestros(usuario:any){
    this.tasksService.getMaestroByUserName(usuario).then(maestros=>{
      return true;
    }).catch(error =>{
      return false;
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
}
