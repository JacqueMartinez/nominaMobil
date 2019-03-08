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
      title: "Bienvenido!",
      description: "Te damos la más cordial bienvenida a: <br><b>HERA MOVIL</b><br><br>En este tutorial encontraras una explicación general del uso de la aplicación que a continuación es puesta a tu disposición con el objetivo de que puedas consultar tu importe de nómina cada semana.<br><br>Una aplicación elaborada por <a>Ghost Enterprise</a>",
      image: "../../assets/imgs/sliderTutorial.png",
    },
    {
      title: "Seguridad:",
      description: "La <b>seguridad</b> de tu información es prioridad para nosotros. <br> Te recomendamos conservar el usuario y contraseña que se te asignó, recuerda que estos son esenciales para acceder a la aplicación.",
      image: "../../assets/imgs/sliderTutorial2.png",
    },
    {
      title: "Inicio de Sesión:",
      description: "En la pantalla número <b>(1)</b> te encontrarás con la interfaz de Login la cual requerirá tu <b>Usuario</b> y <b>Contraseña</b> para poder acceder a la aplicación.",
      image: "../../assets/imgs/slider1.png",
    },
    {
      title: "Perfil y Menú lateral",
      description: "Una vez que usted inicie sesión podrá visualizar su información como: <b>Foto</b>, <b>Nombre</b>, <b>Sueldo base</b>, <b>Departamento</b>, <b>Nivel</b>, <b>Bono de Puntualidad.</b> <br>En el <b>Menú Lateral</b> encontrará las distintas páginas a las que podrá dirigirse: <ul style='text-align: left;'><li>Perfil</li> <li>Tiempo extra</li> <li>Eficiencia Semanal</li> <li>Bonos</li> <li>Cálculos Extras</li></ul>.",
      image: "../../assets/imgs/slider2.png",
    },
    {
      title: "Tiempo Extra",
      description: "Al navegar a la página de <b>Tiempo Extra</b> encontrará el total de horas dobles y horas triples de la semana así como la cantidad y el importe total de las mismas.",
      image: "../../assets/imgs/slider3.png",
    },
    {
      title: "Eficiencia Semanal",
      description: "Al dirigirse a la página de <b>Eficiencia semanal</b> podrá visualizar el porcentaje de eficiencia diaria y el bono ganado por dicha eficiencia.",
      image: "../../assets/imgs/slider4.png",
    },
    {
      title: "Bonos",
      description: "Al situarse en la página de <b>Bonos</b>, podrá observar los dintintos bonos obtenidos como:  <ul><li>Bono de producción.<li>Bono de rendimiento.<li>Descuentos.<li>Diferencia.<li>Prima vacacional.<li>Prima Dominical.<li>Pago dia festivo</ul>.",
      image: "../../assets/imgs/slider5.png",
    },
    {
      title: "Cálculos Extras",
      description: "Esta página es de vital importancia dado que en ella podrá calcular el importe por determinado número de <b>Horas Dobles, Horas Triples</b> y el Importe por <b>Rebases</b> ingresando la información que se te solicita.",
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
