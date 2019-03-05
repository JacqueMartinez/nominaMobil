import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AjustesProvider } from '../../providers/ajustes/ajustes';


@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  slides: any[] = [
    {
      title: "Bienvenido!!!",
      description: "Te damos la más cordial bienvenida a <b>HERA MOVIL</b>!",
      image: "../../assets/imgs/sliderTutorial.png",
    },
    {
      title: "Seguridad:",
      description: "La <b>seguridad</b> de tu información es prioridad para nosotros. <br> Te recomendamos preservar el usuario y contraseña que se te asigno, recuerda que estos son esenciales para acceder a la aplicación",
      image: "../../assets/imgs/sliderTutorial2.png",
    },
    {
      title: "USO:",
      description: "En la pantalla numero <b>(1)</b> te encontraras el login que requerira tu <b>usuario</b> y <b>contraseña</b>",
      image: "../../assets/imgs/slider1.png",
    },
    {
      title: "USO",
      description: "Una vez que usted inicie sesion encontrara con su perfil : <b>Su foto</b>, <b>Su nombre</b>, <b>Su sueldo base</b>, <b>Su departamento</b>, <b>Su nivel</b>, <b>Su Puntualidad</b>. <br>En el apartado <b>perfil</b> En el encontrara <ul><li>Perfil</li> <li>Tiempo extra</li> <li>Eficiencia semanal</li> <li>Bonos</li> <li>Calculos extra</li></ul>. ",
      image: "../../assets/imgs/slider2.png",
    },
    {
      title: "USO",
      description: "Al navegar a la paguina <b>Tiempo Extra</b> encontrara el total de horas dobles y horas triples de la semana asi como la cantidad y el importe total de las mismas.",
      image: "../../assets/imgs/slider3.png",
    },
    {
      title: "USO",
      description: "Al navegar a la paguina <b>Eficiencia semanal</b> encontrara el porcentaje de eficiencia productiva de cada semana y el importe en el recuadro color verde",
      image: "../../assets/imgs/slider4.png",
    },
    {
      title: "USO",
      description: "Al navegar a la paguina <b>Bonos</b>, donde encontrara: <br> <ul><li><b>Bono de produccion</b></li> <li><b>Bono de rendimiento</b></li> <li><b>Descuentos</b></li> <li><b>Diferencia</b></li> <li><b>Prima vacacional</b></li> <li><b>Prima Dominical</b></li> <li><b>Pago dia festivo</b></li> </ul>.",
      image: "../../assets/imgs/slider5.png",
    },
    {
      title: "USO",
      description: "Al navegar a la paguina <b>Calculos extra</b> donde podra calular las horas dobles , triples y los rebases ingresando la informacion que se solicita.",
      image: "../../assets/imgs/slider6.png",
    }
  ];

  constructor(public navCtrl: NavController, private _ajustes: AjustesProvider) {

  }

  saltar_tutorial(){
    this._ajustes.ajustes.mostrar_tutorial= false;
    this._ajustes.guardar_storage();
    this.navCtrl.setRoot(LoginPage);
  }
}
