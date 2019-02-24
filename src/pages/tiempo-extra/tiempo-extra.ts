import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  semana: string = "Semana:";
  loadProgress: any = null;

  diasSemana: any = [
    {dia: 'Lunes', dobles: 5, triples: 2},
    {dia: 'Martes', dobles: 2, triples: 4},
    {dia: 'Miercoles', dobles: 7, triples: 5},
    {dia: 'Jueves', dobles: 1, triples: 3},
    {dia: 'Viernes', dobles: 4, triples: 1},
    {dia: 'Sabado', dobles: 2, triples: 6},
    {dia: 'Domingo', dobles: 2, triples: 6}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiempoExtraPage');
  }

}
