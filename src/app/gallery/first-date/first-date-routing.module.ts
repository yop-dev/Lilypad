import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstDatePage } from './first-date.page';

const routes: Routes = [
  {
    path: '',
    component: FirstDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstDatePageRoutingModule {}
