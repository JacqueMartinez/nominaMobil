import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EficienciaPage } from '../eficiencia/eficiencia';
import { TiempoExtraPage } from '../tiempo-extra/tiempo-extra';
import { TiempoExtraPageModule } from '../tiempo-extra/tiempo-extra.module';
import { EmpleadoProvider } from '../../providers/empleado/empleado';
import { AutenticationProvider } from '../../providers/autentication/autentication';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  semana: string = 'actual';
  idEmpleado: string;
  empleado:  any= [];
  URLFoto: string;

  constructor(public autenticationProvider: AutenticationProvider, public navCtrl: NavController,
    public navParams: NavParams, public alertCtrl: AlertController, public empleadoProvider: EmpleadoProvider) {

    this.iniciarEmpleado();


  }

  async iniciarEmpleado() {
    await this.autenticationProvider.getStatus().subscribe(datos => {  this.extraerNumero(datos.email) });
    await this.empleadoProvider.getEmpleado(parseInt(this.idEmpleado)).valueChanges().subscribe((datos) => {this.empleado = datos});
    await this.empleadoProvider.getURL(this.idEmpleado+ '.JPG').subscribe(datos=>{this.URLFoto = datos});

  }

  public extraerNumero(numero:string){
    numero.charAt(1);
    numero.length;
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
    console.log('ionViewDidLoad PerfilPage');
  }

  eficiencia() {
    this.navCtrl.push(EficienciaPage);
  }
  tiempoExtra() {
    this.navCtrl.push(TiempoExtraPage);
  }

}
