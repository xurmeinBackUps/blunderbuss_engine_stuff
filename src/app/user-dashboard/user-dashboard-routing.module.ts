import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Page404Component } from '../page404/page404.component';


const dashRoutes: Routes = [
  { 
    path: 'dashboard', 
    component: UserDashboardComponent,
    // children: [
    //   { path: '', component: }
    // ]
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forChild(dashRoutes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
