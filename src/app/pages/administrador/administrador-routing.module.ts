import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorPage } from './administrador.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorPage
  },
  {
    path: 'agregar-user',
    loadChildren: () => import('./agregar-user/agregar-user.module').then( m => m.AgregarUserPageModule)
  },
  {
    path: 'agregar-alumno',
    loadChildren: () => import('./agregar-alumno/agregar-alumno.module').then( m => m.AgregarAlumnoPageModule)
  },
  {
    path: 'agregar-profesor',
    loadChildren: () => import('./agregar-profesor/agregar-profesor.module').then( m => m.AgregarProfesorPageModule)
  },
  {
    path: 'listar-alumno',
    loadChildren: () => import('./listar-alumno/listar-alumno.module').then( m => m.ListarAlumnoPageModule)
  },
  {
    path: 'listar-user',
    loadChildren: () => import('./listar-user/listar-user.module').then( m => m.ListarUserPageModule)
  },
  {
    path: 'listar-profesor',
    loadChildren: () => import('./listar-profesor/listar-profesor.module').then( m => m.ListarProfesorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorPageRoutingModule {}
