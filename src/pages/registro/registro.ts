import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { IniciarsesionProvider } from '../../providers/iniciarsesion/iniciarsesion';

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
    public tasksService: TasksServiceProvider,
    public sesionService: IniciarsesionProvider) {
  }

  registrar(){
    this.showAlert("Datos",this.registerCredentials,"Aceptar");
    this.sesionService.signup(this.registerCredentials).then(success => {
      if(success){
          this.showAlert("Registrar","Lala","Aceptar");
      } else {
          this.showAlert("Registrar","Lolo","Aceptar");
      }

    },error =>{
      this.showAlert("Registrar",error,"Aceptar");
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
