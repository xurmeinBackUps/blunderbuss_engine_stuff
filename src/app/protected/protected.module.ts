import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { UserNavModule } from './user-nav/user-nav.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserDashboardModule,
    UserNavModule,
    ViewsModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
