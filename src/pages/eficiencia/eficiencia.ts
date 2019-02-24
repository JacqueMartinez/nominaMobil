import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
  diasSemana: any = [
    {dia: 'Lunes', eficiencia: 70, importe: 70.45},
    {dia: 'Martes', eficiencia: 75, importe: 75.00},
    {dia: 'Miercoles', eficiencia: 80, importe: 80.00},
    {dia: 'Jueves', eficiencia: 85, importe: 85.00},
    {dia: 'Viernes', eficiencia: 90, importe: 90.00},
    ];
   
    total: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.diasSemana.forEach(element => {
      this.total += element.importe;
   });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad EficienciaPage');
  }

}
