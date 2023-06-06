import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstaCentroPage } from './esta-centro.page';

const routes: Routes = [
  {
    path: '',
    component: EstaCentroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstaCentroPageRoutingModule {}
