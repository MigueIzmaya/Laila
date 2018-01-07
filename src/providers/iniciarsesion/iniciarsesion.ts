import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
//import { NavController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';


@Injectable()
export class IniciarsesionProvider {

  user: Observable<firebase.User>;
  result: any;
  /*alertaInicio: any;
  alertaRegistro: any;*/



  constructor(private firebaseAuth: AngularFireAuth, public alertCtrl: AlertController) {
    /*this.alertaInicio = this.alertCtrl.create({
      title: "Aviso",
      subTitle: ,
      buttons: [{
          text: boton,
          handler: data => {
            this.navCtrl.push( RegistroPage );

          }
        }]
    });*/

    /*this.alertaRegistro = this.alertCtrl.create({
      title: "Aviso",
      subTitle: "",
      buttons: [{
          text: "Aceptar",
          handler: data => {
            this.navCtrl.push( HomePage );

          }
        }]
    });*/

  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.showAlert("Aviso","El usuario: "+email+" ha sido registrado con éxito","Aceptar");
        console.log(value);
        return this.result = value;
      })
      .catch(err => {
        this.showAlert("Aviso",err.message,"Aceptar");
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
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
