import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-actividad',
  templateUrl: 'actividad.html',
})
export class Actividad {

  myDate:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myDate = "14/01/2018";
  }


}
