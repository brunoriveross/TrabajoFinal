import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then(m => m.LoadingPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then(m => m.HorarioPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then(m => m.AlumnoPageModule)
  },
  {
    path: 'prefesores',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/prefesores/prefesores.module').then(m => m.PrefesoresPageModule)
      },
      { path: ':id',
        loadChildren: () => import('./pages/asignaturas/detalle/detalle.module').then(m => m.DetallePageModule)
      }
    ]

  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/asignaturas/detalle/qr/qr.module').then(m => m.QRPageModule)
  },
  {
    path: 'asignaturas',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/asignaturas/asignaturas.module').then(m => m.AsignaturasPageModule)
      },
      { path: ':id',
        loadChildren: () => import('./pages/asignaturas/detalle/detalle.module').then(m => m.DetallePageModule)
      }
    ]

  },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador.module').then(m => m.AdministradorPageModule)
  },
  {
    path: 'agregar-profesor',
    loadChildren: () => import('./pages/administrador/agregar-profesor/agregar-profesor.module').then(m => m.AgregarProfesorPageModule)
  },
  {
    path: 'listar-profesor',
    loadChildren: () => import('./pages/administrador/listar-profesor/listar-profesor.module').then(m => m.ListarProfesorPageModule)
  },
  {
    path: 'agregar-alumno',
    loadChildren: () => import('./pages/administrador/agregar-alumno/agregar-alumno.module').then(m => m.AgregarAlumnoPageModule)
  },
  {
    path: 'listar-alumno',
    loadChildren: () => import('./pages/administrador/listar-alumno/listar-alumno.module').then(m => m.ListarAlumnoPageModule)
  },
  {
    path: 'agregar-user',
    loadChildren: () => import('./pages/administrador/agregar-user/agregar-user.module').then(m => m.AgregarUserPageModule)
  },
  {
    path: 'listar-user',
    loadChildren: () => import('./pages/administrador/listar-user/listar-user.module').then(m => m.ListarUserPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/asignaturas/agregar/agregar.module').then(m => m.AgregarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
