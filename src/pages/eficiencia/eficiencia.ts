import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadoProvider } from '../../providers/empleado/empleado';
import { AutenticationProvider } from '../../providers/autentication/autentication';
import { isDifferent } from '@angular/core/src/render3/util';
import { isType } from '@angular/core/src/type';


/**
 * Generated class for the EficienciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eficiencia',
  templateUrl: 'eficiencia.html',
})
export class EficienciaPage {

    totalBonos :number =0;
    bonoCompleto: number = 0;
    diasSemana: any = [];
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public autenticationProvider: AutenticationProvider, public empleadoProvider: EmpleadoProvider) {
    
        this.autenticationProvider.getStatus().subscribe(datos => {
          this.empleadoProvider.getEmpleado(datos.displayName).valueChanges().subscribe((informacion: any) => {
            this.totalBonos = 0;
            this.diasSemana = [
              {dia: 'Lunes', eficiencia: informacion.Eficiencias.Efi_Lunes,importe:0},
              {dia: 'Martes', eficiencia:  informacion.Eficiencias.Efi_Martes,importe:0},
              {dia: 'Miercoles',  eficiencia:  informacion.Eficiencias.Efi_Miercoles,importe:0},
              {dia: 'Jueves',  eficiencia:  informacion.Eficiencias.Efi_Jueves,importe:0},
              {dia: 'Viernes', eficiencia: informacion.Eficiencias.Efi_Viernes,importe:0},
             ]

            this.bonoCompleto = (informacion.BonoProduccionC/5)
  
            this.calcularBonos();
          });
        });
    }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad EficienciaPage');
  }


  calcularBonos(){
   this.diasSemana.forEach(dia => {
    let importe = 0;
    console.log(dia.dia+' '+dia.eficiencia);
    
    if (dia.eficiencia>=84 && dia.eficiencia<90) {
      importe = (.85)* (this.bonoCompleto);
    } else if(dia.eficiencia>=90 && dia.eficiencia<95){
      importe = (.90) * (this.bonoCompleto);
    }
    else if(dia.eficiencia>=95 && dia.eficiencia<100){
      importe= (.95) * (this.bonoCompleto);
    }
    else if(dia.eficiencia>=100){
      importe = (1.00) * (this.bonoCompleto);
    }
    dia.importe = importe;
    this.totalBonos= this.totalBonos +importe;
   });


      
  }
 
  }

