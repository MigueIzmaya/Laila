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
    public tasksService: TasksServiceProvider,
    public sesionService: IniciarsesionProvider) {

  }

  verifica_usuario(){
    this.sesionService.login(this.registerCredentials).subscribe(allowed => {

    }, error=>{

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

  nuevoRegistro(){
    this.navCtrl.push( RegistroPage );
  }

  nuevoActividades(){
    this.navCtrl.push (Actividades);
  }





}
