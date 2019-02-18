import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  MatButtonModule
} from '@angular/material';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ], 
  declarations: [UserDashboardComponent],
  exports: [
    UserDashboardComponent
  ]
})
export class UserDashboardModule { }
