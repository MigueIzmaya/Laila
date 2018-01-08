import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})
export class Bluetooth {
  devices:any = [];

  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial) {
    this.devices = [];


  }

  buscar() {
    this.bluetoothSerial.list().then(device=>{
      this.devices.push(device);

    });

  }

}
