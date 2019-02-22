import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadoProvider } from '../../providers/empleado/empleado';
import { AutenticationProvider } from '../../providers/autentication/autentication';


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

    diasSemana: any = [
      {dia: 'Lunes', importe: 70.45},
      {dia: 'Martes', importe: 75.00},
      {dia: 'Miercoles',  importe: 80.00},
      {dia: 'Jueves',  importe: 85.00},
      {dia: 'Viernes',  importe: 90.00},
      ];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public autenticationProvider: AutenticationProvider, public empleadoProvider: EmpleadoProvider) {
    this.diasSemana.forEach(element => {
      this.total += element.importe;
   });
   this.iniciarEmpleado();

  
  }
  async iniciarEmpleado() {
    await this.autenticationProvider.getStatus().subscribe(datos => { this.idEmpleado = datos.displayName });
    await this.empleadoProvider.getEmpleado(parseInt(this.idEmpleado)).valueChanges().subscribe((datos) => {this.empleado = datos});

  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad EficienciaPage');
    
  }

 
      
}
