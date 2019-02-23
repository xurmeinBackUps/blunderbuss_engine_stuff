import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';

@NgModule({
  declarations: [DiceRollerComponent],
  imports: [
    CommonModule
  ],
  exports: [DiceRollerComponent]
})
export class DiceRollerModule { }
