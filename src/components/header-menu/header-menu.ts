import { Component } from '@angular/core';

/**
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderMenuComponent Component');
    this.text = 'Hello World';
  }

}
