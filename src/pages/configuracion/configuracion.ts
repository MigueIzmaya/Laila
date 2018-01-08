import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Contrasena } from '../contrasena/contrasena.component';
import { AltaAlumno } from '../altaAlumno/altalumno.component';

@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class Configuracion {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goContrasena(){
    this.navCtrl.push( Contrasena );
  }

  goAltaAlumno(){
    this.navCtrl.push( AltaAlumno );

  }



}
