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


import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { NavComponent } from './nav/nav.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ], 
  declarations: [
    UserDashboardComponent, 
    NavComponent,
    LogoutComponent
  ],
  exports: [
    UserDashboardComponent,
    NavComponent,
    LogoutComponent
  ]
})
export class UserDashboardModule { }
