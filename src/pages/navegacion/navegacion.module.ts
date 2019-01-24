import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavegacionPage } from './navegacion';

@NgModule({
  declarations: [
    NavegacionPage,
  ],
  imports: [
    IonicPageModule.forChild(NavegacionPage),
  ],
})
export class NavegacionPageModule {}
