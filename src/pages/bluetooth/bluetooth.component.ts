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
    this.devices = "Presiona para buscar";
  }

  buscar() {
    this.bluetoothSerial.isEnabled().then(device=>{
      //this.isConnect();
      this.listDevices();
    }).catch(connect=>{
      this.devices = "El bluetooth está desactivado";
    });
  }

  isConnect(){
    this.bluetoothSerial.isConnected().then(device =>{
      this.write();
    }).catch(device=>{
      this.connect();
    });
  }

  connect(){
    this.bluetoothSerial.connect("00:06:66:80:AD:70").subscribe(peripheralData =>{
      this.devices = "Conectado";
    });
  }

  write(){
    this.bluetoothSerial.write('Hola Mundo \n').then(device=>{
      this.devices = "Si escribi";
    }).catch(device=>{
      this.devices = device;
    });
  }

  read(){
    this.bluetoothSerial.read().then(peripheralData => {
      this.devices = peripheralData;
    })
  }

  listDevices(){
    this.bluetoothSerial.discoverUnpaired().then(device=>{
      this.devices = "Aqui";
      this.devices = device.address;
    }).catch(error=>{
      this.devices = "Error";
      this.devices = error;
    });
  }
}
