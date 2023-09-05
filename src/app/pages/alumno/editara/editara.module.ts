import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaraPageRoutingModule } from './editara-routing.module';

import { EditaraPage } from './editara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaraPageRoutingModule
  ],
  declarations: [EditaraPage]
})
export class EditaraPageModule {}
