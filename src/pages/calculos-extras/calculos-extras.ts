import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AutenticationProvider } from '../../providers/autentication/autentication';
import { EmpleadoProvider } from '../../providers/empleado/empleado';

/**
 * Generated class for the CalculosExtrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculos-extras',
  templateUrl: 'calculos-extras.html',
})
export class CalculosExtrasPage {

  titulo: string;
  sueldoBase: number = 0;
  importeHora: number = 0;
  idEmpleado: string;
  calculos: any = {
    horasDobles: { horas: null, importe: 0 },
    horasTriples: { horas: null, importe: 0 },
    rebases: { tarea: null, piezas: 1, importe: 0 }
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public autenticationProvider: AutenticationProvider, public empleadoProvider: EmpleadoProvider) {

    this.autenticationProvider.getStatus().subscribe(datos => {
      this.extraerNumero(datos.email);
      this.empleadoProvider.getEmpleado(this.idEmpleado).valueChanges().subscribe((informacion: any) => {
        this.sueldoBase = informacion.SueldoBase;
        this.importeHora = (informacion.SueldoBase) / 67.2;

     /*    this.calculoHorasDobles();
        console.log(this.calculos.horasDobles.importe);

        this.calculoHorasTriples();
        console.log(this.calculos.horasTriples.importe);

        console.log(this.calculos.rebases);
        this.calculoRebase();
 */
      });
    });
  }

  public extraerNumero(numero:string){
    let valor: string = '';
    for (let index = 0; index < numero.length; index++) {
      const element = numero[index];
      if (parseInt(element)>-1) {
        valor = valor + element;
      }
    }
    valor = valor.replace(/^0+/, '');
    this.idEmpleado = parseInt(valor).toString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculosExtrasPage');
  }

  showAlert(titulo, mensaje) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

  calculoHorasDobles() {
    if (this.calculos.horasDobles.horas > 9) {
      this.showAlert('Advertencia','El numero de horas dobles no puede ser mayor a 9');
      this.calculos.horasDobles.importe = 0;
      this.calculos.horasDobles.horas = null;
    } else {
      this.calculos.horasDobles.importe = ((this.importeHora * 2) * this.calculos.horasDobles.horas).toFixed(2);
      console.log(this.calculos.horasDobles.importe);
    }
  }

  calculoHorasTriples() {
    this.calculos.horasTriples.importe = ((this.importeHora * 3) * this.calculos.horasTriples.horas).toFixed(2);
  }

  calculoRebase() {
    this.calculos.rebases.importe = ((((this.sueldoBase / 5) / this.calculos.rebases.tarea) * this.calculos.rebases.piezas) * 2).toFixed(2);
  }

}
