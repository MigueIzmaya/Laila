import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Bluetooth } from '../bluetooth/bluetooth.component';
import { Arrullo } from '../arrullo/arrullo.component';
import { Configuracion } from '../configuracion/configuracion';
import { Actividad } from '../actividad/actividad';
import { ListaAlumnos } from '../lista-alumnos/lista-alumnos';

@Component({
  selector: 'page-actividades',
  templateUrl: 'actividades.html'
})
export class Actividades {

  usuario:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

                this.usuario = this.navParams.get("idMaestro");
  }

  goArrullar(){
    this.navCtrl.push( Arrullo );
  }

  goBluetooth(){
    this.navCtrl.push( Bluetooth );
  }

  goConfiguracion(){
    this.navCtrl.push( Configuracion, {"idMaestro":this.usuario} );
  }

  goActividad(){
    this.navCtrl.push( Actividad);
  }

  goListaAlumnos(){
    this.navCtrl.push( ListaAlumnos );
  }


}
