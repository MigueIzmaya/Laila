import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})
export class Bluetooth {
  devices:any;
pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial) {
    //this.devices = "";
    this.devices = "Hola mundo";


  }

  buscar() {
    //this.devices="lala";
    this.bluetoothSerial.isEnabled().then(device=>{
      this.devices = device;
    }).catch(connect=>{
      this.devices = connect;
    });


    /*this.bluetoothSerial.connect("00:06:66:80:AD:70").map
    this.bluetoothSerial.list().then(device=>{
      //this.devices.push(device);
      //console.log(device);
      this.devices = device;
      //this.devices.push(device);

    });*/
  }

  isConnect(){

  }

  noConnect(){

  }

}
