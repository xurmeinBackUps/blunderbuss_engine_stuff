import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const userDashboardRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(userDashboardRoutes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
