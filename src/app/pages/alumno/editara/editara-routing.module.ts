import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaraPage } from './editara.page';

const routes: Routes = [
  {
    path: '',
    component: EditaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaraPageRoutingModule {}
