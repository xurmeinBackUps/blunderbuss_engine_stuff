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
import { BonesAppComponent } from './views/bones-app/bones-app.component';
import { FleshAppComponent } from './views/flesh-app/flesh-app.component';
import { GroveAppComponent } from './views/grove-app/grove-app.component';
import { DiceAppComponent } from './views/dice-app/dice-app.component';
import { ScreenAppComponent } from './views/screen-app/screen-app.component';
import { SheetAppComponent } from './views/sheet-app/sheet-app.component';
import { SpellCardAppComponent } from './views/spell-card-app/spell-card-app.component';
import { PcBuilderAppComponent } from './views/pc-builder-app/pc-builder-app.component';

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
    LogoutComponent,
    BonesAppComponent,
    FleshAppComponent,
    GroveAppComponent,
    DiceAppComponent,
    ScreenAppComponent,
    SheetAppComponent,
    SpellCardAppComponent,
    PcBuilderAppComponent
  ],
  exports: [
    UserDashboardComponent,
    NavComponent,
    LogoutComponent,
    BonesAppComponent,
    FleshAppComponent,
    GroveAppComponent,
    DiceAppComponent,
    ScreenAppComponent,
    SheetAppComponent,
    SpellCardAppComponent,
    PcBuilderAppComponent
  ]
})
export class UserDashboardModule { }
