import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrar_tutorial: true
  }

  constructor(private platForm: Platform, private storage: Storage) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage(){
    let promesa = new Promise ((resolve,reject)=>{
      if(this.platForm.is("cordova")){
        //estamos en un dispositivo
        this.storage.ready().then(()=>{
          this.storage.get("ajustes").then( ajustes2 =>{

            if(ajustes2){
              this.ajustes = ajustes2;
            }
            resolve();
          });
        })
      }else{
        //estamos en una pc
        
        if(localStorage.getItem("ajustes")){
          this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
        }
        resolve();
      }
    });
    return promesa;
  }

  guardar_storage(){
    if(this.platForm.is("cordova")){
      //estamos en un dispositivo
      this.storage.ready().then(()=>{
        this.storage.set("ajustes",this.ajustes);
      })
    }else{
      //estamos en una pc
      localStorage.setItem("ajustes",JSON.stringify(this.ajustes));
    }
  }
}
