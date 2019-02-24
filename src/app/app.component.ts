import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AutenticationProvider } from '../providers/autentication/autentication';
import { EmpleadoProvider } from '../providers/empleado/empleado';
<<<<<<< HEAD
import { TutorialPage } from '../pages/tutorial/tutorial';
import { AjustesProvider } from '../providers/ajustes/ajustes';
=======
import { TiempoExtraPage } from '../pages/tiempo-extra/tiempo-extra';
import { EficienciaPage } from '../pages/eficiencia/eficiencia';
>>>>>>> 79159126b9db3ba6d8a851c4e7fb9699b7363e0d


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
<<<<<<< HEAD
  //rootPage: any =  LoginPage;
  rootPage: any;
=======
  rootPage: any = EficienciaPage;
>>>>>>> 79159126b9db3ba6d8a851c4e7fb9699b7363e0d

  pages: Array<{ title: string, component: any }>;
  iconos: Array<{ icono: string, concepto: string, importe: string }>;
  empleado: any={
    BonoProduccion:null
  };

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public autenticationProvider: AutenticationProvider, public empleadoProvider: EmpleadoProvider,
    private _ajustes: AjustesProvider) {
    platform.ready().then(() => {
      //aqui cargamos el storage
      this._ajustes.cargar_storage().then(()=>{
        if(this._ajustes.ajustes.mostrar_tutorial){
          this.rootPage = "TutorialPage";
        }else{
          this.rootPage = LoginPage;
        }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      })
    });



    this.pages = [{
      title: 'Home', component: HomePage
    }];


    this.iconos = [
      { icono: "flag", concepto: 'Bono de Produccion:', importe: this.empleado.BonoProduccion },
      { icono: "flash", concepto: 'Bono de Rendimiento:', importe: '$ 1300.40' },
      { icono: "code-download", concepto: 'Descuentos:', importe: '$ 1300.40' },
      { icono: "build", concepto: 'Diferencia:', importe: '$ 1300.40' },
      { icono: "map", concepto: 'Prima Vacional:', importe: '$ 1300.40' },
      { icono: "medal", concepto: 'Prima Dominical:', importe: '$ 1300.40' },
      { icono: "leaf", concepto: 'Dia Festivo:', importe: '$ 1300.40' }
    ];

<<<<<<< HEAD
    // this.autenticationProvider.loginWithEmail('e0020@hera.com', 'ln69je');

   /*     */

=======
    this.autenticationProvider.loginWithEmail('e0020@hera.com', 'ln69je');
 
      this.autenticationProvider.getStatus().subscribe(datos => {
      this.empleadoProvider.getEmpleado(datos.displayName).valueChanges().subscribe((informacion) => {
        this.empleado = informacion;
        console.log(this.empleado);
      })
    });
    console.log('displayname'+this.empleado.displayname) 
>>>>>>> 79159126b9db3ba6d8a851c4e7fb9699b7363e0d

 
  }
  openPage(page) {
    this.nav.setRoot(page.component)

  }

  //Cerrar sesion:
  logOut() {
    this.autenticationProvider.logOut();
    this.getStatus();
    this.nav.push(LoginPage);
  }

  getStatus() {
    this.autenticationProvider.getStatus().subscribe(datos => console.log(datos));
  }

}
