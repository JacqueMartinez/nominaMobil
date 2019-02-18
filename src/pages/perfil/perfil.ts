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
  displayName: string;
  empleado:  any= [];

  constructor(public autenticationProvider: AutenticationProvider, public navCtrl: NavController,
    public navParams: NavParams, public alertCtrl: AlertController, public empleadoProvider: EmpleadoProvider) {

    this.iniciarEmpleado();

    
  }

  async iniciarEmpleado() {
    await this.autenticationProvider.getStatus().subscribe(datos => { this.displayName = datos.displayName });
    await this.empleadoProvider.getEmpleado(parseInt(this.displayName)).valueChanges().subscribe((datos) => {this.empleado = datos});
     await this.empleadoProvider.getURL(this.displayName+ '.jpg').subscribe(datos=>{console.log(datos); 
     });
 
    
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

  showSem() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Seleccionar semana:');

    alert.addInput({
      type: 'radio',
      label: 'Semana Actual',
      value: 'actual',
      checked: true,
    });
    alert.addInput({
      type: 'radio',
      label: 'Semana Pasada',
      value: 'pasada',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
        this.semana = data;
      }
    });
    alert.present();
  }

}
