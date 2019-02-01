import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EficienciaPage } from '../eficiencia/eficiencia';
import { TiempoExtraPage } from '../tiempo-extra/tiempo-extra';
import { TiempoExtraPageModule } from '../tiempo-extra/tiempo-extra.module';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  eficiencia(){
this.navCtrl.push(EficienciaPage);
  }
tiempoExtra(){
this.navCtrl.push(TiempoExtraPage);
}
}
