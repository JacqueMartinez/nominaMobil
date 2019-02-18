import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import{ AngularFireStorage} from  'angularfire2/storage';


/*
  Generated class for the EmpleadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmpleadoProvider {

  constructor(public  afDB :  AngularFireDatabase, public angularFireStorage: AngularFireStorage) {
  }

   /*Obtener todos los empleados que se encuentran en la coleccion  */
   public getEmpleados(){
    return this.afDB.list('/Empleados/');
  };
  /*Obtener un empleado en especifico*/
  public getEmpleado(id){
    console.log(typeof(id))
    return this.afDB.object('/Empleados/'+id);
  };

  /*Registra un nuevo Empleado*/
  public createEmpleado(user){
    return this.afDB.object('/Empleados/'+user.id).set(user);
  }

  /*Actualizar un empleado*/
  public updateEmpleado(user){
    return this.afDB.object('/Empleados/'+user.id).update(user);
  }

  /*Obtener URL del empleado*/
  public getURL(id){
      return this.angularFireStorage.ref('fotosEmpleados/'+id).getDownloadURL();
  } 

}
