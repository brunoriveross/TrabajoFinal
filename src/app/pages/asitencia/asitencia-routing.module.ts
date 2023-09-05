import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsitenciaPage } from './asitencia.page';

const routes: Routes = [
  {
    path: '',
    component: AsitenciaPage
  },
  {
    path: 'listado-asistencia',
    loadChildren: () => import('./listado-asistencia/listado-asistencia.module').then( m => m.ListadoAsistenciaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsitenciaPageRoutingModule {}
