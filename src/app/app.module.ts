import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NavegacionPage } from '../pages/navegacion/navegacion';
import { EficienciaPage } from '../pages/eficiencia/eficiencia';
import { LoginPage } from '../pages/login/login';
import { TiempoExtraPage } from '../pages/tiempo-extra/tiempo-extra';
import { PerfilPage } from '../pages/perfil/perfil';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NavegacionPage,
    EficienciaPage,
    LoginPage,
    TiempoExtraPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NavegacionPage,
    PerfilPage,
    LoginPage,
    TiempoExtraPage,
    EficienciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
