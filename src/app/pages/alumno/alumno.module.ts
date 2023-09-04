import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoPageRoutingModule } from './alumno-routing.module';

import { AlumnoPage } from './alumno.page';
import { ListaComponent } from 'src/app/components/lista/lista.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPageRoutingModule
  ],
  declarations: [
    AlumnoPage,ListaComponent
    ]
})
export class AlumnoPageModule {}
