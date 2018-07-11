import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';

export class User {
  nombre: String;
  usuario: String;
  contrasena: String;

  constructor(nombre: String, usuario: String, contrasena: String) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contrasena = contrasena;
  }

}

@Injectable()
export class IniciarsesionProvider {
  newUser: User;
  tasksService: TasksServiceProvider;
  alertCtrl: AlertController;

  maestro = {nombre: '', usuario: '',contrasena: ''};
  maestros: {nombre: '', usuario: '',contrasena: ''}[] = [];
  registerCredentials = {nombre: '', usuario: '',password: '', password1: ''};

  signup(credentials) {

    if (credentials.password != credentials.password1){
      return Observable.throw("Las contraseñas no coinciden");
      //this.showAlert("Contraseña","Las contraseñas no coinciden", "Aceptar");
    } else {
      this.tasksService.getAllMaestrosByUserName(credentials.usuario)
      .then(data=>{
        if(data){
          return Observable.throw("Ese nombre de usuario ya fue utilizado");
            //this.showAlert("Nombre de usuario","Ese nombre de usuario ya fue utilizado", "Aceptar");
        } else {
          this.maestro.usuario = credentials.usuario;
          this.maestro.nombre = credentials.nombre;
          this.maestro.contrasena = credentials.password;
          this.tasksService.insertTableMaestro(this.maestro);

        }

      }).catch(error=>{
        return Observable.throw("Ocurrio un error al momento de insertar el usuario");
        //this.showAlert("Error","Ocurrio un error al momento de insertar el usuario", "Aceptar");
      });
    }
  }

  login(credentials) {
    if (credentials.usuario === "" || credentials.password === ""){
      //this.showAlert("Credenciales","Por favor ingresa un usuario y/o contraseña","Aceptar");
      return Observable.throw("Por favor ingrese un usuario y/o una contraseña");
    } else {
      this.tasksService.getAllMaestrosByUserNameAndPassword(credentials.usuario, credentials.password)
      .then(data=>{
        if(data){
          return Observable.create(observer =>{
            observer.next(data);
            observer.complete();
          });

        } else {
          return Observable.throw("Datos erroneos");
        }

      }).catch(error=>{
        //this.showAlert("Error","Ocurrio un error al momento de iniciar sesion", "Aceptar");
        return Observable.throw("Error al momento de iniciar sesión");
      });
    }

  }

  logout() {
    return Observable.create(observer => {
      this.newUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  public getUserInfo() : User {
    return this.newUser;
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
