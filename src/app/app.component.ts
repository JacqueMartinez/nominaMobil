import { Component, ViewChild} from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import {TabsPage} from "../pages/tabs/tabs";
import { RecuperarPasswordPage } from '../pages/recuperar-password/recuperar-password';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  pages : Array<{title: string, component: any}>;
  iconos:Array<{icono: string, concepto: string, importe: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [{
      title: 'Home' , component: HomePage
    }];


    this.iconos = [
      {icono: "flag" , concepto: 'Bono de Produccion:', importe: '$ 1300.40'},
      {icono: "flash" , concepto: 'Bono de Rendimiento:', importe: '$ 1300.40'},
      {icono: "code-download" , concepto: 'Descuentos:', importe: '$ 1300.40'},
      {icono: "build" , concepto: 'Diferencia:', importe: '$ 1300.40'},
      {icono: "map" , concepto: 'Prima Vacional:', importe: '$ 1300.40'},
      {icono: "medal" , concepto: 'Prima Dominical:', importe: '$ 1300.40'},
      {icono: "leaf" , concepto: 'Dia Festivo:', importe: '$ 1300.40'}
    ];

  }
  openPage(page){
    this.nav.setRoot(page.component)
  }
}
