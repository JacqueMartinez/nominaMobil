import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecuperarPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar-password',
  templateUrl: 'recuperar-password.html',
})

export class RecuperarPasswordPage {

  passwordType: string = 'password';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarPasswordPage');
  }

  public verPassword(){
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

}
