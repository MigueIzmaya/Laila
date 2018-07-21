import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { IniciarsesionProvider } from '../../providers/iniciarsesion/iniciarsesion';
import { RegistroPage } from "../registro/registro";

import { AlertController } from 'ionic-angular';

import {AltaAlumno} from '../altaAlumno/altalumno.component';
import { Actividades } from '../actividades/actividades.component';

import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  items: Observable<any[]>;
  email: string;
  password: string;
  registerCredentials = {usuario: '', password: ''};
  maestro = {nombre: '', usuario: '',contrasena: ''};

  constructor(public navCtrl: NavController,
    private authService: IniciarsesionProvider,
    public alertCtrl: AlertController,
    public tasksService: TasksServiceProvider) {

  }

  verifica_usuario(){
    if (this.registerCredentials.usuario === "" || this.registerCredentials.password === ""){
      this.showAlert("Credenciales","Por favor ingresa un usuario y/o contraseña","Aceptar");
    } else {
      this.tasksService.getAllMaestrosByUserNameAndPassword(this.registerCredentials.usuario, this.registerCredentials.password)
      .then(data=>{
        if(data){
            this.nuevoActividades();
        } else {
          this.showAlert("Inicio de Sesión","Nombre de usuario y/o contraseña incorrectos", "Aceptar");
        }

      }).catch(error=>{ this.showAlert("Error","Ocurrio un error al momento de iniciar sesion", "Aceptar"); })
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

  nuevoRegistro(){
    this.navCtrl.push( RegistroPage );
  }

  nuevoActividades(){
    this.navCtrl.push (Actividades);
  }





}
