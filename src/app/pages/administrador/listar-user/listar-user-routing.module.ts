import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarUserPage } from './listar-user.page';

const routes: Routes = [
  {
    path: '',
    component: ListarUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarUserPageRoutingModule {}
