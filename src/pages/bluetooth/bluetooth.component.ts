import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController  } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';

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
      this.presentLoadingCustom();
      //this.listDevices();
    }).catch(connect=>{
      this.showAlert("Bluetooth","El bluetooth está desactivado","Aceptar");
    });
  }

  connect(serie: string){
    this.bluetoothSerial.connect(serie).subscribe(peripheralData =>{
      this.write("Hola mundo");
    });
  }

  write(mensaje:string){
    this.bluetoothSerial.write(mensaje + ' \n').then(resultado=>{

    }).catch(error=>{
      this.showAlert("Error bluetooth",error,"Aceptar");
    });
  }
/*
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
    this.connect(address);
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
