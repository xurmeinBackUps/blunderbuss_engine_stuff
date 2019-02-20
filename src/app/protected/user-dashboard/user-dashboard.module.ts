import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,

} from '@angular/material';


import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    LogoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ], 
  exports: [
    DashboardComponent,
    LogoutComponent
  ]
})
export class UserDashboardModule { }
