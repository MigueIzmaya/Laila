import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { AlertController } from 'ionic-angular';
import { IniciarsesionProvider } from '../../providers/iniciarsesion/iniciarsesion';

@Component({
  selector: 'page-altalumno',
  templateUrl: 'altalumno.html'
})
export class AltaAlumno {

  boleta: string;
  nombre: string;

  registerAlumno = {boleta: '', nombre: ''};

  constructor(public navCtrl: NavController,
              public tasksService: TasksServiceProvider,
              public alertCtrl: AlertController,
              public sesionService: IniciarsesionProvider) {

  }

  registrar_alumno(){
    let registro:any;
    this.sesionService.getUserInfo().usuario
    if (this.registerAlumno.nombre === "" || this.registerAlumno.boleta === ""){
      this.showAlert("Alumno","Por favor ingrese un nombre y/o una boleta", "Aceptar");
    } else {
      this.showAlert("Informacion",this.sesionService.getUserInfo().usuario, "Aceptar");
      /*this.tasksService.insertTableAlumno().then

      this.tasksService.getAllMaestrosByUserName(this.registerCredentials.usuario)
      .then(data=>{
        if(data){
            this.showAlert("Nombre de usuario","Ese nombre de usuario ya fue utilizado", "Aceptar");
        } else {
          this.maestro.usuario = this.registerCredentials.usuario;
          this.maestro.nombre = this.registerCredentials.nombre;
          this.maestro.contrasena = this.registerCredentials.password;
          this.showAlert("Nombre de usuario","Todo bien", "Aceptar");
          this.tasksService.insertTableMaestro(this.maestro);
        }

      }).catch(error=>{ this.showAlert("Error","Ocurrio un error al momento de insertar el usuario", "Aceptar"); });
      */
    }

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
