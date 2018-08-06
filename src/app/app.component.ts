import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Arrullo } from '../pages/arrullo/arrullo.component';
import { Alimentar } from '../pages/alimentar/alimentar.component';
import { Panal } from '../pages/panal/panal.component';
import { Calificacion } from '../pages/calificacion/calificacion.component';
import { Bluetooth } from '../pages/bluetooth/bluetooth.component';
import { Contrasena } from '../pages/contrasena/contrasena.component';
import { Vestimenta } from '../pages/vestimenta/vestimenta.component';
import { Actividades } from '../pages/actividades/actividades.component';
import { AltaAlumno } from '../pages/altaAlumno/altalumno.component';
import { Configuracion } from '../pages/configuracion/configuracion';
import { Actividad } from '../pages/actividad/actividad';
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';
//import { BluetoothProvider } from '../providers/bluetooth/bluetooth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public sqlite: SQLite,
    public tasksService: TasksServiceProvider
  /*public bluetooth: BluetoothProvider*/) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Alimentar', component: Alimentar },
      { title: 'Arrullo', component: Arrullo },
      { title: 'Pañal', component: Panal},
      { title: 'Vestimenta', component: Vestimenta},
      { title: 'Bluetooth', component: Bluetooth},
      { title: 'Contraseña', component: Contrasena},
      { title: 'Actividades', component: Actividades},
      { title: 'Alta alumno', component: AltaAlumno},
      { title: 'Configuración', component: Configuracion},
      { title: 'Actividad', component: Actividad}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createDatabase();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  private createDatabase(){
    this.sqlite.create({
      name: 'laila.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
      this.tasksService.setDatabase(db);
      /*this.tasksService.dropTableActividades();
      this.tasksService.dropTableAlumno();
      this.tasksService.dropTableMaestro();
      this.tasksService.dropTableActividadAlumno();*/

      this.tasksService.createTableActividad().then((data) => { }, (error) => {});
      this.tasksService.createTableAlumno().then((data) => {}, (error) => {});
      this.tasksService.createTableMaestro().then((data) => {}, (error) => {});
      this.tasksService.createTableActividadAlumno().then((data) => {}, (error) => {});
      this.tasksService.insertTableActividades();
      //return this.tasksService.createTable();
    })
    .catch(error =>{
      console.error(error);
    });
  }
}
