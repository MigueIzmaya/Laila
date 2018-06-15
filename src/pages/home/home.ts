import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { IniciarsesionProvider } from '../../providers/iniciarsesion/iniciarsesion';
import { RegistroPage } from "../registro/registro";

import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

import {AltaAlumno} from '../altaAlumno/altalumno.component';
import { Actividades } from '../actividades/actividades.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  items: Observable<any[]>;
  email: string;
  password: string;
  registerCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase, private authService: IniciarsesionProvider, private firebaseAuth: AngularFireAuth, public alertCtrl: AlertController) {

  }

  verifica_usuario( usuario:string, password:string ){


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



}
