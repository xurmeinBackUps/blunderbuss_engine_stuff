import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { UserInterfaceModule } from './user-interface/user-interface.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserInterfaceModule,
    ProtectedRoutingModule
  ],
})
export class ProtectedModule { }
