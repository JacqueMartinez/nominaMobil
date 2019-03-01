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
  idEmpleado: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public autenticationProvider: AutenticationProvider,
    public empleadoProvider: EmpleadoProvider) {

      this.autenticationProvider.getStatus().subscribe(datos => {
        this.extraerNumero(datos.email)
        this.empleadoProvider.getEmpleado(this.idEmpleado).valueChanges().subscribe((informacion: any) => {
          this.bonos = informacion.Bonos;
          console.log(this.bonos);

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
    console.log('ionViewDidLoad BonosPage');
  }

}
