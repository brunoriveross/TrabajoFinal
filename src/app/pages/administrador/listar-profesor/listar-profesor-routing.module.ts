import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProfesorPage } from './listar-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: ListarProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarProfesorPageRoutingModule {}
