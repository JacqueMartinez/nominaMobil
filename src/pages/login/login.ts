import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RecuperarPasswordPage } from '../recuperar-password/recuperar-password';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  passwordType: string = 'password';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menuController: MenuController) {
  }

  public verPassword(){
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  iraPerfil(){
    this.navCtrl.setRoot(TabsPage);
  }

  iraRecuperar(){
    this.navCtrl.setRoot(RecuperarPasswordPage);
  }
  ionViewDidEnter() {
    this.menuController.enable(false);
  }

  ionViewDidLeave() {
    this.menuController.enable(true);
  }
}
