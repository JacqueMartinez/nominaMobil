import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { AjustesProvider } from '../providers/ajustes/ajustes';
import { AutenticationProvider } from '../providers/autentication/autentication';
import { PerfilPage } from '../pages/perfil/perfil';
import { TiempoExtraPage } from '../pages/tiempo-extra/tiempo-extra';
import { EficienciaPage } from '../pages/eficiencia/eficiencia';
import { BonosPage } from '../pages/bonos/bonos';
import { CalculosExtrasPage } from '../pages/calculos-extras/calculos-extras';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage: any =  CalculosExtrasPage;
  rootPage: any;

  pages: Array<{ title: string, component: any }>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, _ajustes: AjustesProvider, public autenticationProvider: AutenticationProvider) {
    platform.ready().then(() => {
      //aqui cargamos el storage
      _ajustes.cargar_storage().then(() => {
        if (_ajustes.ajustes.mostrar_tutorial) {
          this.rootPage = TutorialPage;
        } else {
          this.rootPage = LoginPage;
        }
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      })
    });

    this.pages = [
      {title: 'Perfil', component: PerfilPage},
      {title: 'Tiempo Extra', component: TiempoExtraPage},
      {title: 'Eficiencia Semanal', component: EficienciaPage},
      {title: 'Bonos', component: BonosPage},
      {title: 'Calculos Extras', component: CalculosExtrasPage},

    ];

  }
  goPage(){
    this.nav.push(PerfilPage)
  }

  logOut() {
    this.autenticationProvider.logOut();
    this.autenticationProvider.getStatus().subscribe(datos =>{
     if(!datos){
      this.nav.push(LoginPage);
     }
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);

  }
}
