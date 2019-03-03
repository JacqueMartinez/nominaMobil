import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RecuperarPasswordPage } from '../recuperar-password/recuperar-password';
import { PerfilPage } from '../perfil/perfil';
import { AutenticationProvider } from '../../providers/autentication/autentication';
import { User } from '../../app/interfaz/user';
import { TutorialPage } from '../tutorial/tutorial';


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



  usuario: User = {
    email: '',
    password: '',
    displayname: ''
  };

  passwordType: String = 'password';



  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menuController: MenuController, public autenticationProvider: AutenticationProvider,
    public alertCtrl: AlertController) {

    console.log(this.passwordType);

    //   this.usuario.forEach(element => {
    //    this.autenticationProvider.registrarWithEmailPassword(element.user, element.password).then((datos) => {
    //      datos.user.updateProfile({ displayName: element.displayname, photoURL: element.displayname+'.jpg' }).then(() => {
    //        console.log('Updated')
    //      })
    //    })
    //  });

    //  this.autenticationProvider.registrarWithEmailPassword('brandon.vargas021@hera.com.mx','prueba20').then((datos) =>{
    //   datos.user.updateProfile({displayName: 'Brandon', photoURL: 'prueba'}).then(() =>{
    //     console.log('Updated')
    //   })
    //  })

    // this.autenticationProvider.loginWithEmail('user0002@gmail.com', '123456').then((datos) => {
    //   console.log(datos);
    // })
  }

  public verPassword() {
    (this.passwordType === 'password') ? this.passwordType = 'text' : this.passwordType = 'password';
    console.log(this.passwordType)
  }


  public iniciarSesion() {
    console.log('inicio');
    this.autenticationProvider.loginWithEmail(this.usuario.email, this.usuario.password)
      .then(e => {
        console.log('entro');
        this.navCtrl.setRoot(PerfilPage);
      })
      .catch(e => {
        if (!this.usuario.email) {
          this.showAlert('Debe rellenar los campos para poder acceder a la aplicacion.', 'Datos Incompletos');
        } else {
          if (!this.usuario.password) {
            this.showAlert('No se a proporcionado una contraseña para el inicio de sesion.', 'Datos Incompletos');
          } else if (e.message == 'The email address is badly formatted.') {
            this.showAlert('El correo proporcionado no cumple con el formato requerido.', 'Datos Incorrectos');
            console.log(e.message);
          } else if (e.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
            console.log(e.message);
            this.showAlert('No existe en el sistema el usuario proporcionado, te sugerimos ponerte en contacto con el area de Soporte Tecnico.','Usuario Invalido')
          }else if(e.message == 'The password is invalid or the user does not have a password.'){
            console.log(e.message);
            this.showAlert('La contraseña es incorrecta, te sugerimos revisar tus datos de acceso.','Contraseña Invalida')
          }else if(e.message == 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.'){
            console.log(e.message);
            this.showAlert('Actualmente no cuentas con una conexion a Internet, lamentamos el inconveniente.','Ups!')

            
          }
        }



     /*  this.showAlert(e.message,'Error de Acceso')
      console.log(e) */})
  }

  public showAlert(mensaje: string, title: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // iraPerfil() {
  //   this.navCtrl.setRoot(TabsPage);
  // }

  iraRecuperar() {
    this.navCtrl.setRoot(RecuperarPasswordPage);
  }

  iraTutorial() {
    this.navCtrl.setRoot(TutorialPage);
  }

  ionViewDidEnter() {
    this.menuController.enable(false);
  }

  ionViewDidLeave() {
    this.menuController.enable(true);
  }


}
