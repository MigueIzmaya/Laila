import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Bluetooth } from '../bluetooth/bluetooth.component';
import { Arrullo } from '../arrullo/arrullo.component';
import { Alimentar } from '../alimentar/alimentar.component';
import { Contrasena } from '../contrasena/contrasena.component';
import { Vestimenta } from '../vestimenta/vestimenta.component';
import { Panal } from '../panal/panal.component';
import { Configuracion } from '../configuracion/configuracion';


@Component({
  selector: 'page-actividades',
  templateUrl: 'actividades.html'
})
export class Actividades {



  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {

  }

  goArrullar(){ this.navCtrl.push( Arrullo ); }
  goEructar(){ this.navCtrl.push( Alimentar ); }
  goBluetooth(){ this.navCtrl.push( Bluetooth ); }
  goAbrigar(){ this.navCtrl.push( Vestimenta ); }
  goPanal(){ this.navCtrl.push( Panal ); }
  goConfiguracion(){ this.navCtrl.push( Configuracion ); }


}
