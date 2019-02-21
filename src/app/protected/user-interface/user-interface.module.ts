import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
} from '@angular/material';

import { UserNavModule } from './user-nav/user-nav.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    UserNavModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports: [
    DashboardComponent,
    LogoutComponent
  ]
})
export class UserInterfaceModule { }
