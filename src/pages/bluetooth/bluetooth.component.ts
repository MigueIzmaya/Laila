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
              public loadingCtrl: LoadingController,
              public bluetooth: BluetoothProvider) {
  }

  buscar() {
    if(this.bluetooth.isEnable() == true){
      this.showAlert("bluetooth","Antes de loadingListDevice","Aceptar");
      this.loadingListDevices();
    }
  }

  connect(serie: string){
    if(this.bluetooth.connect(serie)){
      this.showAlert("Bluetooth","Conectado con éxito","Aceptar");
    }
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

  loadingListDevices() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Espere por favor...",
      duration: 20000
    });

    loading.onDidDismiss(() => {
      this.devicesArray = this.bluetooth.listDevices();
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
