import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnprotectedRoutingModule } from './unprotected-routing.module';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegistrationModule,
    UnprotectedRoutingModule
  ]
})
export class UnprotectedModule { }
