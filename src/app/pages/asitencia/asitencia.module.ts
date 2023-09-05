import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsitenciaPageRoutingModule } from './asitencia-routing.module';

import { AsitenciaPage } from './asitencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsitenciaPageRoutingModule
  ],
  declarations: [AsitenciaPage]
})
export class AsitenciaPageModule {}
