import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadoProvider } from '../../providers/empleado/empleado';
import { AutenticationProvider } from '../../providers/autentication/autentication';
import { isDifferent } from '@angular/core/src/render3/util';


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

    
    total: number = 0;
    idEmpleado: string;
    empleado:  any= [];
    bonoCompleto: number = 0;
    Diferencia: number =0;
  
    diasSemana: any [] = [];
    eficiencias = [];
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public autenticationProvider: AutenticationProvider, public empleadoProvider: EmpleadoProvider) {
        this.autenticationProvider.getStatus().subscribe(datos => {
          this.empleadoProvider.getEmpleado(datos.displayName).valueChanges().subscribe((informacion: any) => {
            this.empleado = informacion;
            this.getInformacion();
            this.bonoCompleto=parseInt(this.empleado.BonoProduccionC);
            this.obtenerEficiencia();
            this.guardar();
            this.diasSemana.forEach(element =>{
              this.total += element.importe;
              });
          });
        });
    }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad EficienciaPage');
    
  }
  getInformacion(){
     this.diasSemana = [
      {dia: 'Lunes', eficiencia: this.empleado.Efi_Lunes,importe:0},
      {dia: 'Martes', eficiencia: this.empleado.Efi_Martes,importe:0},
      {dia: 'Miercoles',  eficiencia: this.empleado.Efi_Miercoles,importe:0},
      {dia: 'Jueves',  eficiencia: this.empleado.Efi_Jueves,importe:0},
      {dia: 'Viernes', eficiencia: this.empleado.Efi_Viernes,importe:0},
     ]
  }
 
  obtenerEficiencia(){
    this.diasSemana.forEach(dia => {
      this.obtenerBono(dia.eficiencia);
    });
  }
  obtenerBono(eficiencia){
    
    if (eficiencia>=84 && eficiencia<90) {
      this.Diferencia = (.85)* (this.bonoCompleto/5);
    } else if(eficiencia>=90 && eficiencia<95){
      this.Diferencia = (.90) * (this.bonoCompleto/5);
    }
    else if(eficiencia>=95 && eficiencia<100){
      this.Diferencia= (.95) * (this.bonoCompleto/5);
    }
    else if(eficiencia>=100){
      this.Diferencia = (1.00) * (this.bonoCompleto/5);
    }
    this.eficiencias.push(this.Diferencia.toFixed(2));

  }
  guardar(){
    this.diasSemana.forEach(dia =>{
      dia.importe = this.eficiencias.shift();
    })
  }




 
      
}
