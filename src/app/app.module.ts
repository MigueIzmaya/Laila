import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { SQLite } from '@ionic-native/sqlite';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Arrullo } from '../pages/arrullo/arrullo.component';
import { Calificacion } from '../pages/calificacion/calificacion.component';
import { Bluetooth } from '../pages/bluetooth/bluetooth.component';
import { Contrasena } from '../pages/contrasena/contrasena.component';
import { Actividades } from '../pages/actividades/actividades.component';
import { RegistroPage } from '../pages/registro/registro';
import { AltaAlumno } from '../pages/altaAlumno/altalumno.component';
import { Configuracion } from '../pages/configuracion/configuracion';
import { Actividad } from '../pages/actividad/actividad';
import { ListaAlumnos } from '../pages/lista-alumnos/lista-alumnos';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';
import { BluetoothProvider } from '../providers/bluetooth/bluetooth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Arrullo,
    Calificacion,
    Bluetooth,
    Contrasena,
    Actividades,
    RegistroPage,
    AltaAlumno,
    Configuracion,
    Actividad,
    ListaAlumnos
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Arrullo,
    Calificacion,
    Bluetooth,
    Contrasena,
    Actividades,
    RegistroPage,
    AltaAlumno,
    Configuracion,
    Actividad,
    ListaAlumnos
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BluetoothSerial,
    SQLite,
    TasksServiceProvider,
    BluetoothProvider
  ]
})
export class AppModule {}
