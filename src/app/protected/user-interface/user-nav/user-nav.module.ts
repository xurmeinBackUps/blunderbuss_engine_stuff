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
import { BonesModule } from './views/bones/bones.module';
import { DiceRollerModule } from './views/dice-roller/dice-roller.module';
import { FleshModule } from './views/flesh/flesh.module';
import { GroveModule } from './views/grove/grove.module';
import { PcBuilderModule } from './views/pc-builder/pc-builder.module';
import { SheetMakerModule } from './views/sheet-maker/sheet-maker.module';
import { SpellcardMakerModule } from './views/spellcard-maker/spellcard-maker.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    BonesModule,
    DiceRollerModule,
    FleshModule,
    GroveModule,
    PcBuilderModule,
    SheetMakerModule,
    SpellcardMakerModule,
    UserNavRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports: [NavComponent]
})
export class UserNavModule { }
