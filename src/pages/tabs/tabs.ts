import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PerfilPage} from "../perfil/perfil";
import {TiempoExtraPage} from "../tiempo-extra/tiempo-extra";
import {EficienciaPage} from "../eficiencia/eficiencia";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabPerfil = PerfilPage;
  tabTiempoExtra = TiempoExtraPage;
  tabEficiencia = EficienciaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
