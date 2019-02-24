import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutenticationProvider } from '../../providers/autentication/autentication';
import { EmpleadoProvider } from '../../providers/empleado/empleado';

/**
 * Generated class for the BonosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bonos',
  templateUrl: 'bonos.html',
})
export class BonosPage {
  empleado: any={
    BonoProduccion:null
  };

  iconos: Array<{ icono: string, concepto: string, importe: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public autenticationProvider: AutenticationProvider,
    public empleadoProvider: EmpleadoProvider) {
    this.iconos = [
      { icono: "flag", concepto: 'Bono de Produccion:', importe: this.empleado.BonoProduccion },
      { icono: "flash", concepto: 'Bono de Rendimiento:', importe: '$ 1300.40' },
      { icono: "code-download", concepto: 'Descuentos:', importe: '$ 1300.40' },
      { icono: "build", concepto: 'Diferencia:', importe: '$ 1300.40' },
      { icono: "map", concepto: 'Prima Vacional:', importe: '$ 1300.40' },
      { icono: "medal", concepto: 'Prima Dominical:', importe: '$ 1300.40' },
      { icono: "leaf", concepto: 'Dia Festivo:', importe: '$ 1300.40' }
    ];


    this.autenticationProvider.getStatus().subscribe(datos => {
      if(datos!=null){
        // this.empleadoProvider.getEmpleado(datos.displayName).valueChanges().subscribe((informacion) => {
        //   this.empleado = informacion;
        //   console.log(this.empleado);
        //   console.log('displayname'+this.empleado.displayname); })
        this.obtenerDatos(datos.displayName);
      }
    });
  }

  async obtenerDatos(displayName){
    await this.empleadoProvider.getEmpleado(displayName).valueChanges().subscribe((informacion)=>{
      this.empleado = informacion;

       console.log(displayName);
    })
    await console.log(this.empleado);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonosPage');
  }

}
