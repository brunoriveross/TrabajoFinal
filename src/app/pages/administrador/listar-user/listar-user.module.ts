import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarUserPageRoutingModule } from './listar-user-routing.module';

import { ListarUserPage } from './listar-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarUserPageRoutingModule
  ],
  declarations: [ListarUserPage]
})
export class ListarUserPageModule {}
