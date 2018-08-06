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
    this.bluetoothSerial.isConnected().then(device =>{
      return true;
    }).catch(device=>{
      return false;
    });
  }

  isEnable():any{
    this.bluetoothSerial.isEnabled().then(response=>{
      this.showAlert("Bluetooth",JSON.stringify(response, null, 4),"Aceptar");
      if(response.toLowerCase() == "ok"){
        return true;
      } else {
        return false;
      }
    }).catch(connect=>{
      this.showAlert("Bluetooth","El bluetooth está desactivado","Aceptar");
    });
  }

  connect(serie: string): any{
    this.bluetoothSerial.connect(serie).subscribe(data =>{
      if (data.toLowerCase() == "ok"){
        return true;
      } else {
        return false;
      }
    });
  }

  write(mensaje:string):any{
    this.bluetoothSerial.write(mensaje + ' \n').then(resultado=>{
      if(resultado.toLowerCase() == "ok"){
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

  listDevices(){
    this.bluetoothSerial.discoverUnpaired().then(devices=>{
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
