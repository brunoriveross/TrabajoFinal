import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarpPageRoutingModule } from './editarp-routing.module';

import { EditarpPage } from './editarp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarpPageRoutingModule
  ],
  declarations: [EditarpPage]
})
export class EditarpPageModule {}
