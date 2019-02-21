import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadoProvider } from '../../providers/empleado/empleado';
import { AutenticationProvider } from '../../providers/autentication/autentication';

/**
 * Generated class for the TiempoExtraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tiempo-extra',
  templateUrl: 'tiempo-extra.html',
})
export class TiempoExtraPage {
  loadProgress: any = null;

  sueldoBase: number;
  horasTotales: number;
  horasDobles: number;
  horasTriples: number;
  tiempoExtra: any;

  importeDobles: number;
  importeTriples: number;
  importeTotal: number;

  diasSemana: any [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public autenticationProvider: AutenticationProvider, public empleadoProvider: EmpleadoProvider) {

      this.autenticationProvider.getStatus().subscribe(datos => {
        this.empleadoProvider.getEmpleado(datos.displayName).valueChanges().subscribe((informacion: any) => {
          this.tiempoExtra = informacion.TiempoExtra;
          this.sueldoBase = informacion.SueldoBase;

          this.getHorasExtra();
          this.horasTotales = this.getTotalHoras();
          this.getHorasDoblesTriples();
          this.getImportes();
          this.importeTotal = (this.importeDobles + this.importeTriples);
        });
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiempoExtraPage');
  }

  getHorasExtra() {
    this.diasSemana = [
      {dia: 'Lunes', horasExtra: this.tiempoExtra.HorasLun},
      {dia: 'Martes', horasExtra: this.tiempoExtra.HorasMar},
      {dia: 'Miercoles', horasExtra: this.tiempoExtra.HorasMie},
      {dia: 'Jueves', horasExtra: this.tiempoExtra.HorasJue},
      {dia: 'Viernes', horasExtra: this.tiempoExtra.HorasVie},
      {dia: 'Sabado', horasExtra: this.tiempoExtra.HorasSab},
      {dia: 'Domingo', horasExtra: this.tiempoExtra.HorasDom}
    ]
  }

  getTotalHoras(): number {
    let total = 0;
    this.diasSemana.forEach(dia => {
      total +=  parseInt(dia.horasExtra);
    });
    return total;
  }

  getHorasDoblesTriples() {
    if(this.horasTotales <= 9) {
      this.horasDobles = this.horasTotales;
      this.horasTriples = 0;
    } else {
      this.horasDobles = 9;
      this.horasTriples = (this.horasTotales - 9);
    }
  }

  getImportes() {
    if (this.horasDobles) {
      this.importeDobles = (((this.sueldoBase / 48) * 2) * this.horasDobles);
      if (this.horasTriples) {
        this.importeTriples = (((this.sueldoBase / 48) * 3) * this.horasTriples);
      } else {
        this.importeTriples = 0.00;
      }
    } else {
      this.importeDobles = 0.00;
    }
  }
}
