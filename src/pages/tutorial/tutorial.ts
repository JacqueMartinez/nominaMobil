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
      description: "En la pantalla numero <b>(1)</b> te encontraras el login que requerira tu <b>usuario</b> y <b>contraseña</b><br> Una vez que inicie sesion se encontrara con su perfil <b>(2)</b> donde podra ver los siguientes datos:<br><ul><li>Su nombre</li> <li>Su salario</li> <li>La Linea</li></ul>",
      image: "../../assets/imgs/sliderTutorial3.png",
    },
    {
      title: "USO",
      description: "En esta misma pantalla <b>(3)</b> se encoontrara con la barra navegadora donde podra navegar entre estas paguinas y tendra acceso a la siguiente informacion : <br> <ul><li>Su perfil</li> <li>El tiempo extra</li> <li>La eficiencia</li></ul>.",
      image: "../../assets/imgs/sliderTutorial4.png",
    },
    {
      title: "USO",
      description: "Al navegar a la paguina <b>Horas Extra</b> encontrara el total de horas dobles y horas triples de la semana asi como la cantidad y el importe total de las mismas.",
      image: "../../assets/imgs/sliderTutorial5.png",
    },
    {
      title: "USO",
      description: "Al navegar a la paguina <b>Eficiencia</b> encontrara el porcentaje de eficiencia productiva de cada semana y el importe en el recuadro color verde",
      image: "../../assets/imgs/sliderTutorial6.png",
    },
    {
      title: "USO",
      description: "Ahora regresaremos a la paguina <b>perfil</b>, nos dirijiremos a <b>perfil</b> donde encontrara: <br> <ul><li><b>Bono de produccion</b></li> <li><b>Bono de rendimiento</b></li> <li><b>Descuentos</b></li> <li><b>Diferencia</b></li> <li><b>Prima vacacional</b></li> <li><b>Prima Dominical</b></li> <li><b>Dia festivo</b></li> </ul>.",
      image: "../../assets/imgs/sliderTutorial7.png",
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
