import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-altalumno',
  templateUrl: 'altalumno.html'
})
export class AltaAlumno {

  boleta: string;
  nombre: string;

  registerAlumno = {boleta: '', nombre: ''};
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase) {

  }

  registrar_alumno(){
    //this.items = this.afDB.list('/Actividad').valueChanges();
    const ref1 = this.afDB.list('/Alumno').query.ref.push();
    ref1.set(this.registerAlumno.boleta);
    console.log(ref1.key);
    //console.log(newKey);
  }

}
