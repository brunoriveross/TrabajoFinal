import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrefesoresPageRoutingModule } from './prefesores-routing.module';

import { PrefesoresPage } from './prefesores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrefesoresPageRoutingModule
  ],
  declarations: [PrefesoresPage]
})
export class PrefesoresPageModule {}
