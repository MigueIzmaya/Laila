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
    //const ref1 = this.afDB.list('/Alumno').query.ref.push();
    //ref1.set(this.registerAlumno.boleta);
    //const ref2 = this.afDB.list('Alumno/'+this.registerAlumno.boleta).query.ref.push();
    //ref2.push(this.registerAlumno.nombre);

    //const ref3 = this.afDB.list().
    //var ref3 = this.afDB.list('Alumno/'+this.registerAlumno.boleta+'/'+'-L2TDqaH3WTNEbDbbr6E').query.ref;
    var ref3 = this.afDB.list('Alumno/').query.ref;

    //ref3.update('2011640248','20115609');
    //console.log(ref1.key);
    //console.log(ref2.key);
    //console.log(newKey);
  }

}
