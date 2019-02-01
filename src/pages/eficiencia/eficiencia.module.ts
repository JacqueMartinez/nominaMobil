import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EficienciaPage } from './eficiencia';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    EficienciaPage,
    ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(EficienciaPage),
    ProgressBarComponent
  ],
})
export class EficienciaPageModule {}
