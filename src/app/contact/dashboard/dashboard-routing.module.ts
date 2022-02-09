import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { DetailsPage } from '../details/details.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }, 
  {
    path: ':placeId',
    component: DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
