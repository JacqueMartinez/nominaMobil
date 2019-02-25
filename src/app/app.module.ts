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
import { TabsPage } from "../pages/tabs/tabs";
import { RecuperarPasswordPage } from '../pages/recuperar-password/recuperar-password';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

import { IonicStorageModule } from '@ionic/storage';

import { EmpleadoProvider } from '../providers/empleado/empleado';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../enviroment/enviroment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AutenticationProvider } from '../providers/autentication/autentication';
import { BonosPage } from '../pages/bonos/bonos';
import{ AngularFireStorageModule} from  'angularfire2/storage';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { AjustesProvider } from '../providers/ajustes/ajustes';
import { TutorialPageModule } from '../pages/tutorial/tutorial.module';

export const firebaseConfig = environment.firebaseConfig;


AngularFireModule
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NavegacionPage,
    EficienciaPage,
    LoginPage,
    TiempoExtraPage,
    PerfilPage,
    BonosPage,
    TabsPage,
    RecuperarPasswordPage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    TutorialPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,
      {
        scrollPadding: false,
        scrollAssist: true,
        autoFocusAssist: false
      }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NavegacionPage,
    PerfilPage,
    LoginPage,
    TiempoExtraPage,
    EficienciaPage,
    BonosPage,
    TabsPage,
    RecuperarPasswordPage,
    ProgressBarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AjustesProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EmpleadoProvider,
    AutenticationProvider,
    AngularFireStorageModule,
    AjustesProvider
  ]
})
export class AppModule { }
