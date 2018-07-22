import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contrasena } from '../contrasena/contrasena.component';
import { AltaAlumno } from '../altaAlumno/altalumno.component';

@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class Configuracion {

  usuario:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

                this.usuario = this.navParams.get("idMaestro");
  }

  goContrasena(){
    this.navCtrl.push( Contrasena, {"idMaestro": this.usuario});
  }

  goAltaAlumno(){
    this.navCtrl.push( AltaAlumno, {"idMaestro":this.usuario});
  }



}
