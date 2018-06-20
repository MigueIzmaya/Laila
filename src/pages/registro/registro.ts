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

    if (this.registerCredentials.password != this.registerCredentials.password1){
      this.showAlert("Contraseña","Las contraseñas no coinciden", "Aceptar");
    }

    let valorRegreso = this.getMaestros(this.registerCredentials.usuario);

    this.valor = "El valor que regreso es: "+valorRegreso;

    /*else if(this.getMaestros(this.registerCredentials.usuario)){
      this.showAlert("Nombre de usuario","Ese nombre de usuario ya fue utilizado", "Aceptar");
      this.valor = "Lanze el show alert";
    }else {
      this.maestro.usuario = this.registerCredentials.usuario;
      this.maestro.contrasena = this.registerCredentials.password;
      this.maestro.nombre = this.registerCredentials.nombre;
      //this.tasksService.insertTableMaestro(this.maestro);
      /*.then(response => {
        this.valor = response;
      }).catch(error =>{
        this.valor = error;
      });

    }*/

  }

  getMaestros(usuario:String): boolean {
    let retorno:boolean;

    this.tasksService.getMaestroByUserName(usuario)
    .then(maestros => {
      this.maestros = maestros;
      for (let index = 0; index < this.maestros.length; index++){
        //this.valor = "Valor ingresado: " + usuario + "Valor base: " + this.maestros[index].usuario;
         if(this.maestros[index].usuario === usuario){
           //this.valor = this.valor + " Entre aqui";
           retorno = true;
         }
      }
      retorno = false;
      //this.showAlert("getMaestros",this.maestros[0].usuario,"Accept");
    }).catch(error =>{
      retorno = false;
    });
    return retorno;
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
