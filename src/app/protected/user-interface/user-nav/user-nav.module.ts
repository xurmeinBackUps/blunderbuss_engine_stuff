import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
} from '@angular/material';

import { UserNavRoutingModule } from './user-nav-routing.module';
import { NavComponent } from './nav/nav.component';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    ViewsModule,
    UserNavRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports: [NavComponent]
})
export class UserNavModule { }
