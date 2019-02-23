import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BonesComponent } from './views-container/views/bones/bones/bones.component';
import { FleshComponent } from './views-container/views/flesh/flesh/flesh.component';
import { GroveComponent } from './views-container/views/grove/grove/grove.component';
import { ScreenMakerComponent } from './views-container/views/screen-maker/screen-maker/screen-maker.component';
import { PcBuilderComponent } from './views-container/views/pc-builder/pc-builder/pc-builder.component';
import { DiceRollerComponent } from './views-container/views/dice-roller/dice-roller/dice-roller.component';
import { SpellcardMakerComponent } from './views-container/views/spellcard-maker/spellcard-maker/spellcard-maker.component';
import { SheetMakerComponent } from './views-container/views/sheet-maker/sheet-maker/sheet-maker.component';
import { ViewsContainerComponent } from './views-container/views-container.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const viewRoutes: Routes = [
  { 
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '',
        component: ViewsContainerComponent,
        children: [
          { path: 'BonesOfTheTarrasque', component: BonesComponent },
          { path: 'FleshOfTheTarrasque', component: FleshComponent },
          { path: 'GroveOfTheTarrasque', component: GroveComponent },
          { path: 'ScreenMaker', component: ScreenMakerComponent },
          { path: 'npcBuilder', component: PcBuilderComponent },
          { path: 'dice_roller', component: DiceRollerComponent },
          { path: 'SpellCardMaker', component: SpellcardMakerComponent },
          { path: 'SheetMaker', component: SheetMakerComponent }
        ]
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(viewRoutes)],
  exports: [RouterModule]
})
export class UserNavRoutingModule { }
