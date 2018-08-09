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
  registerBluetooth = {boleta: '', numero_serie: ''};
  ejemplo:any;
  Alumnos:any=[];
  constructor(public navCtrl: NavController,
              private bluetoothSerial: BluetoothSerial,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public bluetooth: BluetoothProvider,
              public tasksService: TasksServiceProvider) {

                this.getAllAlumnos();
  }

  buscar() {
    this.bluetooth.isEnable().then(res =>{
      if(res){
        this.loadingListDevices();
      }
    });
  }

  connect(serie: string){
    this.bluetooth.connect(serie).then(res=>{
      if(res){
        this.registerBluetooth.boleta = this.registerActivity.alumno;
        this.registerBluetooth.numero_serie = serie;
        this.tasksService.updateTableAlumno(this.registerBluetooth);
        this.showAlert("Bluetooth","Conectado con éxito","Aceptar");
      }
    })

  }

  seleccionarBluetooth(address:string){
    this.showAlert("seleccionarBluetooth",address,"Aceptar");
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
      this.bluetooth.listDevices().then(resultado => {
          this.devicesArray = resultado;
      });
    });

    loading.present();
  }

  getAllAlumnos(){
    this.tasksService.getAllAlumnos().then(alumnos=>{
      this.Alumnos = alumnos;
    });
  }

  showLoading() {
    const loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 5000
    });
    loader.present();
  }
}
