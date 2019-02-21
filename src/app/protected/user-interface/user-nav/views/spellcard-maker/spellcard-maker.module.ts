import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellcardMakerComponent } from './spellcard-maker/spellcard-maker.component';

@NgModule({
  declarations: [SpellcardMakerComponent],
  imports: [
    CommonModule
  ],
  exports: [SpellcardMakerComponent]
})
export class SpellcardMakerModule { }
