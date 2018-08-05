import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController  } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})
export class Bluetooth {
  devicesArray:any = null;
  dispositivos = {name: '', address: '', id: '', class: ''};
  registerActivity = {miDia: '', miHora: '', activity: '', alumno: '', duracion: ''};
  ejemplo:any;
  constructor(public navCtrl: NavController,
              private bluetoothSerial: BluetoothSerial,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
    //this.devices = "Presiona para buscar";
  }

  buscar() {
    this.bluetoothSerial.isEnabled().then(device=>{
      //this.listDevices();
    }).catch(connect=>{
      this.showAlert("Bluetooth","El bluetooth está desactivado","Aceptar");
    });
  }
  /*
  isConnect(){
    this.bluetoothSerial.isConnected().then(device =>{
      this.write();
    }).catch(device=>{
      this.connect();
    });
  }*/
  /*
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
  }*/

  listDevices(){
    this.bluetoothSerial.discoverUnpaired().then(devices=>{
      this.devicesArray = devices;
    }).catch(error=>{
      this.showAlert("Error",error,"Aceptar");
    });
  }

  seleccionarBluetooth(address:string){
    this.presentLoadingCustom();

  }

  showAlert(titulo, contenido, boton) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: [boton]
    });
    alert.present();
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Espere por favor...",
      duration: 20000
    });

    loading.onDidDismiss(() => {
      this.listDevices();
    });

    loading.present();
  }

  showLoading() {
    const loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 5000
    });
    loader.present();
  }
}
