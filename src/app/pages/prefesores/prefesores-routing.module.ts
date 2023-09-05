import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrefesoresPage } from './prefesores.page';

const routes: Routes = [
  {
    path: '',
    component: PrefesoresPage
  },  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'editarp',
    loadChildren: () => import('./editarp/editarp.module').then( m => m.EditarpPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrefesoresPageRoutingModule {}
