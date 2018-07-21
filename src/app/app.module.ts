import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Calendar } from '@ionic-native/calendar';
import { NgCalendarModule  } from 'ionic2-calendar';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { SQLite } from '@ionic-native/sqlite';


import { MyApp } from './app.component';
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
import { RegistroPage } from '../pages/registro/registro';
import { AltaAlumno } from '../pages/altaAlumno/altalumno.component';
import { Configuracion } from '../pages/configuracion/configuracion';
import { Actividad } from '../pages/actividad/actividad';
import { ListaAlumnos } from '../pages/lista-alumnos/lista-alumnos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';

export const firebaseConfig = {
  apiKey: "AIzaSyBprUY9O9KqFtpuag9VY9M7k1c2tLk4-tk",
  authDomain: "laila-21c65.firebaseapp.com",
  databaseURL: "https://laila-21c65.firebaseio.com",
  projectId: "laila-21c65",
  storageBucket: "laila-21c65.appspot.com",
  messagingSenderId: "916725128401"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Arrullo,
    Alimentar,
    Panal,
    Calificacion,
    Bluetooth,
    Contrasena,
    Vestimenta,
    Actividades,
    RegistroPage,
    AltaAlumno,
    Configuracion,
    Actividad,
    ListaAlumnos
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Arrullo,
    Alimentar,
    Panal,
    Calificacion,
    Bluetooth,
    Contrasena,
    Vestimenta,
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
    DatePicker,
    Calendar,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BluetoothSerial,
    SQLite,
    TasksServiceProvider
  ]
})
export class AppModule {}
