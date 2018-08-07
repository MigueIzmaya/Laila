import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController, LoadingController } from 'ionic-angular';


@Injectable()
export class BluetoothProvider {

  constructor(private bluetoothSerial: BluetoothSerial,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {}

  isConnect():any{
    return this.bluetoothSerial.isConnected().then(device =>{
      if(device == "OK"){
        return true;
      } else {
        return false;
      }
    }).catch(device=>{
      return false;
    });
  }

  isEnable():any{
    return this.bluetoothSerial.isEnabled().then(response=>{
      let respuesta;
      if(response == "OK"){
        respuesta = true;
      } else {
        respuesta = false;
      }

      return respuesta;
    }).catch(connect=>{
      this.showAlert("Bluetooth","El bluetooth está desactivado","Aceptar");

    });
  }

  connect(serie: string): any{
    return this.bluetoothSerial.connect(serie).subscribe(data =>{
      if (data == "OK"){
        return true;
      } else {
        return false;
      }
    });
  }

  write(mensaje:string):any{
    this.bluetoothSerial.write(mensaje + ' \n').then(resultado=>{
      if(resultado == "OK"){
        return true;
      } else {
        return false;
      }
    }).catch(error=>{
      this.showAlert("Error bluetooth","Hubo un error al envíar los datos","Aceptar");
    });
  }

  read(){
    this.bluetoothSerial.read().then(peripheralData => {
      return peripheralData;
    }).catch(error=>{
      this.showAlert("Bluetooth","Hubo un error al leer los datos","Aceptar");
    });
  }

  listDevices():any{
    return this.bluetoothSerial.discoverUnpaired().then(devices=>{
      return devices;
    }).catch(error=>{
      this.showAlert("Error",error,"Aceptar");
    });
  }

  showLoading() {
    const loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 5000
    });
    loader.present();
  }

  showAlert(titulo, contenido, boton) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: [boton]
    });
    alert.present();
  }
}
