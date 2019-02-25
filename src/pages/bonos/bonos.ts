import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutenticationProvider } from '../../providers/autentication/autentication';
import { EmpleadoProvider } from '../../providers/empleado/empleado';


@IonicPage()
@Component({
  selector: 'page-bonos',
  templateUrl: 'bonos.html',
})
export class BonosPage {
  bonos: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public autenticationProvider: AutenticationProvider,
    public empleadoProvider: EmpleadoProvider) {
   
      this.autenticationProvider.getStatus().subscribe(datos => {
        this.empleadoProvider.getEmpleado(datos.displayName).valueChanges().subscribe((informacion: any) => {
          this.bonos = informacion.Bonos;
          console.log(this.bonos);

        });
      });
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad BonosPage');
  }

}
