import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';

@Component({
  selector: 'page-lista-alumnos',
  templateUrl: 'lista-alumnos.html',
})
export class ListaAlumnos {

  Alumnos:any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tasksService: TasksServiceProvider) {
  }

  getAllAlumnos(){
    this.tasksService.getAllAlumnos().then(alumnos=>{
      this.Alumnos = alumnos;
    })

  }

}
