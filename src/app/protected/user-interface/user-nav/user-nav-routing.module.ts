import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BonesComponent } from './views/bones/bones/bones.component';
import { FleshComponent } from './views/flesh/flesh/flesh.component';
import { GroveComponent } from './views/grove/grove/grove.component';
import { ScreenMakerComponent } from './views/screen-maker/screen-maker/screen-maker.component';
import { PcBuilderComponent } from './views/pc-builder/pc-builder/pc-builder.component';
import { DiceRollerComponent } from './views/dice-roller/dice-roller/dice-roller.component';
import { SpellcardMakerComponent } from './views/spellcard-maker/spellcard-maker/spellcard-maker.component';
import { SheetMakerComponent } from './views/sheet-maker/sheet-maker/sheet-maker.component';

const viewRoutes: Routes = [
  { path: 'BonesOfTheTarrasque', component: BonesComponent },
  { path: 'FleshOfTheTarrasque', component: FleshComponent },
  { path: 'GroveOfTheTarrasque', component: GroveComponent },
  { path: 'ScreenMaker', component: ScreenMakerComponent },
  { path: '(n)pcMaker', component: PcBuilderComponent },
  { path: 'dice_roller', component: DiceRollerComponent },
  { path: 'SpellCardMaker', component: SpellcardMakerComponent },
  { path: 'SheetMaker', component: SheetMakerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(viewRoutes)],
  exports: [RouterModule]
})
export class UserNavRoutingModule { }
