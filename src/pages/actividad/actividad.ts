import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';



@Component({
  selector: 'page-actividad',
  templateUrl: 'actividad.html',
})

export class Actividad {

  miDia:any;
  miHora:any;
  activity:any;
  actividades:any[][];
  registerActivity = {miDia: '', miHora: '', activity: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  registrar_actividad(){
    
  }


}
