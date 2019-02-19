import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  MatButtonModule
} from '@angular/material';


import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    UserDashboardComponent, 
    NavComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ], 
  exports: [
    UserDashboardComponent,
    NavComponent
  ]
})
export class UserDashboardModule { }
