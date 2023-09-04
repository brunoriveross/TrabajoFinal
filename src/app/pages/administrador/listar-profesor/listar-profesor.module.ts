import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarProfesorPageRoutingModule } from './listar-profesor-routing.module';

import { ListarProfesorPage } from './listar-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarProfesorPageRoutingModule
  ],
  declarations: [ListarProfesorPage]
})
export class ListarProfesorPageModule {}
