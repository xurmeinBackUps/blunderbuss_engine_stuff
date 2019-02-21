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
import { BonesModule } from './views-container/views/bones/bones.module';
import { DiceRollerModule } from './views-container/views/dice-roller/dice-roller.module';
import { FleshModule } from './views-container/views/flesh/flesh.module';
import { GroveModule } from './views-container/views/grove/grove.module';
import { PcBuilderModule } from './views-container/views/pc-builder/pc-builder.module';
import { SheetMakerModule } from './views-container/views/sheet-maker/sheet-maker.module';
import { SpellcardMakerModule } from './views-container/views/spellcard-maker/spellcard-maker.module';
import { ScreenMakerModule } from './views-container/views/screen-maker/screen-maker.module';
import { ViewsContainerComponent } from './views-container/views-container.component';

@NgModule({
  declarations: [
    NavComponent,
    ViewsContainerComponent
  ],
  imports: [
    CommonModule,
    BonesModule,
    DiceRollerModule,
    FleshModule,
    GroveModule,
    PcBuilderModule,
    SheetMakerModule,
    SpellcardMakerModule,
    ScreenMakerModule,
    UserNavRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports: [
    NavComponent,
    ViewsContainerComponent
  ]
})
export class UserNavModule { }
