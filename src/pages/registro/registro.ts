import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IniciarsesionProvider } from '../../providers/iniciarsesion/iniciarsesion';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  registerCredentials = {email: '', password: ''};
  valor:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: IniciarsesionProvider, private firebaseAuth: AngularFireAuth, public alertCtrl: AlertController) {
  }

  registrar(){

    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(this.registerCredentials.email, this.registerCredentials.password)
      .then(value => {
        console.log('Success!', value);
        this.showAlert("Aviso","El usuario: "+this.registerCredentials.email+" ha sido registrado con éxito","Aceptar");
        this.navCtrl.push( RegistroPage );
      })
      .catch(err => {
        this.showAlert("Aviso",err.message,"Aceptar");
        console.log('Something went wrong:',err.message);
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
