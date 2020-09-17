import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewhomePage } from './newhome.page';

const routes: Routes = [
  {
    path: '',
    component: NewhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewhomePageRoutingModule {}
