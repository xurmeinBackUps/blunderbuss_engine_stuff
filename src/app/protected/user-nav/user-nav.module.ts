import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserNavRoutingModule } from './user-nav-routing.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    UserNavRoutingModule
  ],
  exports: [NavComponent]
})
export class UserNavModule { }
