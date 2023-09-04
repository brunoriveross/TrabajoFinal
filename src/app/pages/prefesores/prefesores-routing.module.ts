import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrefesoresPage } from './prefesores.page';

const routes: Routes = [
  {
    path: '',
    component: PrefesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrefesoresPageRoutingModule {}
