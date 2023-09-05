import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarpPage } from './editarp.page';

const routes: Routes = [
  {
    path: '',
    component: EditarpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarpPageRoutingModule {}
