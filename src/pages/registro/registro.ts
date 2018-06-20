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
  maestros: {nombre: '', usuario: '',contrasena: ''}[] = [];
  maestro1: any[];

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
      this.getMaestros(this.registerCredentials.usuario)
      .then(data=>{ this.showAlert("Nombre de usuario","Ese nombre de usuario ya fue utilizado", "Aceptar"); })
      .catch(error=>{ this.showAlert("Nombre de usuario","Entre en error", "Aceptar"); })



    }
  }

  getMaestros(usuario:String){
    let retorno:boolean = false;

    return this.tasksService.getMaestroByUserName(usuario)
    .then(maestros => {
      this.maestros = maestros;
      for (let index = 0; index < this.maestros.length; index++){
        //this.valor = "Valor ingresado: " + usuario + "Valor base: " + this.maestros[index].usuario;
         if(this.maestros[index].usuario === usuario){
           //this.valor = this.valor + " Entre aqui";
           return Promise.resolve(true);
         }
      }
      Promise.reject(false);
      //this.showAlert("getMaestros",this.maestros[0].usuario,"Accept");
    }).catch(error =>{
      Promise.reject(false);
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
